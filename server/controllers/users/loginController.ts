import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { connection } from '../..';
import { userInfo } from 'os';

export const matchUserInfomation = async (
	request: Request,
	response: Response
) => {
	const accessTokenKey = process.env.ACCESS_TOKEN_SECRET || '';
	const refreshTokenKey = process.env.REFRESH_TOKEN_SECRET || '';
	const { email, password } = request.body;
	const loginUserQuery =
		'SELECT id, email, phoneNumber FROM User WHERE email=? AND password=?';

	connection.query(loginUserQuery, [email, password], (error, result) => {
		if (error) return response.status(500).send('Internal Server Error');

		if (result.length === 0) return response.status(401).send('Unauthorized');

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

		return response.status(201).send(...result);
	});
};
