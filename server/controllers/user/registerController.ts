import { Request, Response } from 'express';
import { FieldPacket, RowDataPacket } from 'mysql2';
import { db } from '../../db';

interface CreateAccount extends RowDataPacket {
	id: number;
	email: string;
	phoneNumber: string;
	password: string;
}

export const createAccount = (request: Request, response: Response) => {
	const promisePool = db.promise();
	const { email, phoneNumber, password } = request.body;
	const checkExistingUserQuery = 'SELECT email FROM User WHERE email=?';
	const registerUserQuery = 'INSERT INTO User SET ?';

	db.getConnection(async (error, connection) => {
		try {
			const [rows]: [CreateAccount[], FieldPacket[]] = await promisePool.query(
				checkExistingUserQuery,
				[email]
			);
			if (rows.length) return response.status(400).send('Bad Request');

			await promisePool.query(registerUserQuery, {
				email,
				phoneNumber,
				password,
			});

			return response.status(201).send('User registered successfully');
		} catch (error) {
			return response.status(500).send('Internal Server Error');
		} finally {
			return db.releaseConnection(connection);
		}
	});
};
