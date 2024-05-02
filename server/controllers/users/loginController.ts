import { Request, Response } from 'express';
import { connection } from '../..';

export const matchUserInfomation = async (
	request: Request,
	response: Response
) => {
	const { email, password } = request.body;
	const loginUserQuery = 'SELECT * FROM User WHERE email=? AND password=?';

	connection.query(loginUserQuery, [email, password], (error, result) => {
		if (error) return response.status(500).send('Internal Server Error');

		if (result.length === 0) return response.status(401).send('Unauthorized');

		return response.status(201).send(...result);
	});
};
