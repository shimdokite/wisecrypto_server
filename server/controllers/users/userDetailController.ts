import { FieldPacket, RowDataPacket } from 'mysql2';
import { db } from '../../db';
import { Request, Response } from 'express';

interface UserDetail extends RowDataPacket {
	id: string;
	email: string;
	password?: string;
}

const promisePool = db.promise();

export const getUserDetail = async (request: Request, response: Response) => {
	const id = request.cookies.userId;
	const userDetailQuery = 'SELECT id, email FROM User WHERE id=?';

	try {
		const [rows]: [UserDetail[], FieldPacket[]] = await promisePool.query(
			userDetailQuery,
			[id]
		);

		if (rows.length === 0) return response.status(401).send('Unauthorized');

		return response.status(200).send(rows);
	} catch (error) {
		return response.status(500).send('Internal Server Error');
	}
};

export const editUserDetail = async (request: Request, response: Response) => {
	const id = request.cookies.userId;
	const { email, previousPassword, changedPassword } = request.body;
	const checkToPasswordQuery = 'SELECT password FROM User WHERE password=?';
	const updateEmailAndPasswordQuery =
		'UPDATE User SET email=?, password=? WHERE id=?';

	try {
		const [rows]: [UserDetail[], FieldPacket[]] = await promisePool.query(
			checkToPasswordQuery,
			[previousPassword]
		);

		if (rows.length === 0) return response.status(401).send('Unauthorized');

		await promisePool.query(updateEmailAndPasswordQuery, [
			email,
			changedPassword,
			id,
		]);

		return response.status(200).send('Resource updated successfully');
	} catch (error) {
		return response.status(500).send('Internal Server Error');
	}
};
