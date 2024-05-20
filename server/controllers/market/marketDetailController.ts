import { Request, Response } from 'express';
import { FieldPacket, RowDataPacket } from 'mysql2';
import cron from 'node-cron';
import { db } from '../../db';
import { getCoinMarketCap } from '../../api/market';

export interface MarketDetail extends RowDataPacket {
	id: number;
	name: string;
	symbol: string;
	price: string;
	marketImage: string;
	percent_change_24h: string;
}

const promisePool = db.promise();

export const getMarketDetail = async (request: Request, response: Response) => {
	const limit = request.query.limit || '';
	const connection = await promisePool.getConnection();
	const marketDetailQuery = 'SELECT * FROM Coin ORDER BY cmc_rank';

	try {
		const [rows]: [MarketDetail[], FieldPacket[]] = await connection.query(
			marketDetailQuery
		);

		const pageInfo = {
			perPage: 10,
			currentPage: +limit,
			limit: 99,
		};

		const marketSlice = rows.slice(
			pageInfo.currentPage * pageInfo.perPage,
			pageInfo.currentPage * pageInfo.perPage + 10
		);

		const marketDetail = [...marketSlice];

		return response
			.status(200)
			.send({ market: marketDetail, pageInfo: pageInfo });
	} catch (error) {
		return response.status(500).send('Internal Server Error');
	} finally {
		connection.release();
	}
};

const cronScheduler = async () => {
	cron.schedule('*/5 * * * *', async () => {
		const connection = await promisePool.getConnection();
		const queryParams: (number | string)[] = [];

		try {
			const marketDetail = await getCoinMarketCap();

			const updateMarketDetailQuery = `
                UPDATE Coin 
                SET 
                    name = CASE id 
                        ${marketDetail.map(() => `WHEN ? THEN ?`).join(' ')}
                    END, 
                    symbol = CASE id 
                        ${marketDetail.map(() => `WHEN ? THEN ?`).join(' ')}
                    END, 
                    price = CASE id 
                        ${marketDetail.map(() => `WHEN ? THEN ?`).join(' ')}
                    END, 
                    percent_change_24h = CASE id 
                        ${marketDetail.map(() => `WHEN ? THEN ?`).join(' ')}
                    END, 
                    cmc_rank = CASE id 
                        ${marketDetail.map(() => `WHEN ? THEN ?`).join(' ')}
                    END 
                WHERE id IN (${marketDetail.map(() => `?`).join(', ')});
            `;

			marketDetail.forEach((market: MarketDetail) => {
				queryParams.push(
					market.id,
					market.name,
					market.symbol,
					market.quote['USD']?.price,
					market.quote['USD'].percent_change_24h,
					market.cmc_rank
				);
			});

			marketDetail.forEach((market: { id: number }) => {
				queryParams.push(market.id);
			});

			await connection.query(updateMarketDetailQuery, queryParams);

			console.log('5분마다 실행 : All data changed!');
		} catch (error) {
			console.error(error);
		} finally {
			connection.release();
		}
	});
};

cronScheduler();
