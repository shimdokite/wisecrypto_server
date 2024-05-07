import { Request, Response } from 'express';
import { FieldPacket, RowDataPacket } from 'mysql2';
import jwt from 'jsonwebtoken';
import { db } from '../../db';

interface Login extends RowDataPacket {
	email: string;
	password: string;
}

export const matchUserInfomation = async (
	request: Request,
	response: Response
) => {
	const promisePool = db.promise();
	const { email, password } = request.body;
	const accessTokenKey = process.env.ACCESS_TOKEN_SECRET || '';
	const refreshTokenKey = process.env.REFRESH_TOKEN_SECRET || '';
	const loginUserQuery =
		'SELECT id, email, phoneNumber FROM User WHERE email=? AND password=?';

	try {
		const [rows]: [Login[], FieldPacket[]] = await promisePool.query(
			loginUserQuery,
			[email, password]
		);

		if (rows.length === 0) return response.status(401).send('Unauthorized');

		const accessToken = jwt.sign({ type: 'jwt', email }, accessTokenKey, {
			algorithm: 'HS256',
			expiresIn: '1m',
		});

		const refreshToken = jwt.sign({}, refreshTokenKey, {
			algorithm: 'HS256',
			expiresIn: '14d',
		});

		response.cookie('accessToken', `Bearer ${accessToken}`, { httpOnly: true });
		response.cookie('refreshToken', refreshToken, { httpOnly: true });

		return response.status(201).send('User logged in successfully.');
	} catch (error) {
		return response.status(500).send('Internal Server Error');
	}
};
