import { Request, Response } from 'express';
import { FieldPacket, RowDataPacket } from 'mysql2';
import jwt from 'jsonwebtoken';
import { db } from '../../db';
import { strict } from 'assert';

interface Login extends RowDataPacket {
	email: string;
	password: string;
}

export const matchUserInfomation = (request: Request, response: Response) => {
	const promisePool = db.promise();
	const { email, password } = request.body;
	const accessTokenKey = process.env.ACCESS_TOKEN_SECRET || '';
	const refreshTokenKey = process.env.REFRESH_TOKEN_SECRET || '';
	const loginUserQuery =
		'SELECT id, email, phoneNumber FROM User WHERE email=? AND password=?';

	db.getConnection(async (error, connection) => {
		try {
			const [rows]: [Login[], FieldPacket[]] = await promisePool.query(
				loginUserQuery,
				[email, password]
			);

			if (rows.length === 0) return response.status(401).send('Unauthorized');

			const id = rows[0].id;

			const accessToken = jwt.sign({ type: 'jwt', id, email }, accessTokenKey, {
				algorithm: 'HS256',
				expiresIn: '30m',
			});

			const refreshToken = jwt.sign({ id }, refreshTokenKey, {
				algorithm: 'HS256',
				expiresIn: '14d',
			});

			response.cookie('accessToken', `Bearer ${accessToken}`, {
				httpOnly: true,
				domain: '.wisecrypto-server.shop',
			});
			response.cookie('refreshToken', refreshToken, {
				httpOnly: true,
				domain: '.wisecrypto-server.shop',
			});

			return response.status(201).send('User logged in successfully.');
		} catch (error) {
			return response.status(500).send('Internal Server Error');
		} finally {
			return db.releaseConnection(connection);
		}
	});
};
