import { Request, Response } from 'express';
import { FieldPacket, RowDataPacket } from 'mysql2';
import { db } from '../../db';

interface MarketDetail extends RowDataPacket {
	id: number;
	marketImage: string;
	marketName: string;
	baseCoin: string;
	marketCap: string;
	percent: string;
}

export const getMarketDetail = async (request: Request, response: Response) => {
	const promisePool = db.promise();
	const marketDetailQuery = 'SELECT * FROM Market';

	try {
		const [rows]: [MarketDetail[], FieldPacket[]] = await promisePool.query(
			marketDetailQuery
		);

		return response.status(200).send(rows);
	} catch (error) {
		return response.status(500).send('Internal Server Error');
	}
};
