import { Request, Response } from 'express';
import { FieldPacket, RowDataPacket } from 'mysql2';
import axios from 'axios';
import cron from 'node-cron';
import { db } from '../../db';

interface MarketDetail extends RowDataPacket {
	id: number;
	name: string;
	symbol: string;
	price: string;
	marketImage: string;
	percent_change_24h: string;
}

const { COINMARKETCAP_API, API_KEY } = process.env;

const instance = axios.create({
	baseURL: COINMARKETCAP_API,
	headers: {
		'X-CMC_PRO_API_KEY': API_KEY,
	},
	withCredentials: true,
});

export const getCoinMarketCap = async (limit: string) => {
	if (limit === '100') return [];

	const response = await instance.get(
		`/v1/cryptocurrency/listings/latest?limit=${limit}`
	);

	return response.data.data;
};

export const getMarketImage = async (id: string) => {
	const response = await instance.get(`v2/cryptocurrency/info?id=${id}`);

	return response.data.data[id].logo;
};

export const getMarketDetail = async (request: Request, response: Response) => {
	const limit = request.params.limit;
	const promisePool = db.promise();
	const connection = await promisePool.getConnection();
	const checkExistingMarketQuery = 'SELECT id FROM Coin WHERE id=?';
	const marketDetailQuery = 'SELECT * FROM Coin';
	const updateMarketDetailQuery = 'UPDATE Coin SET price=? WHERE id=?';
	const insertMarketDetailQuery =
		'INSERT INTO Coin (id, name, symbol, price, marketImage, percent_change_24h) VALUES (?, ?, ?, ?, ?, ?)';

	const cronScheduler = () => {
		cron.schedule('*/5 * * * *', async () => {
			const response = await getCoinMarketCap(limit);

			for (const market of response) {
				const { id, quote } = market;
				const { price } = quote['USD'];

				try {
					await connection.query(updateMarketDetailQuery, [price, id]);
					console.log('5분마다 실행 : price changed!');
				} catch (error) {
					console.error(error);
					return response.status(500).send('Internal Server Error');
				}
			}
		});
	};

	cronScheduler();

	try {
		const marketDetail = await getCoinMarketCap(limit);

		if (!marketDetail) {
			return response.status(500).send('Failed to fetch market detail');
		}

		await connection.beginTransaction();

		for (const market of marketDetail) {
			const { id, name, symbol, quote } = market;
			const { price, percent_change_24h } = quote['USD'];
			const marketImage = await getMarketImage(id);

			try {
				const [rows]: [MarketDetail[], FieldPacket[]] = await connection.query(
					checkExistingMarketQuery,
					[id]
				);

				if (rows.length === 0) {
					await connection.query(insertMarketDetailQuery, [
						id,
						name,
						symbol,
						price,
						marketImage,
						percent_change_24h,
					]);
				}
			} catch (error) {
				await connection.rollback();

				console.error(error);
				return response.status(500).send('Internal Server Error');
			}
		}

		const [rows]: [MarketDetail[], FieldPacket[]] = await connection.query(
			marketDetailQuery
		);
		await connection.commit();

		connection.release();

		const pageInfo = {
			currentPage: limit,
			lastPage: 100,
		};

		return response.status(200).send({ rows, pageInfo });
	} catch (error) {
		console.error(error);
		return response.status(500).send('Internal Server Error');
	} finally {
		connection.release();
	}
};
