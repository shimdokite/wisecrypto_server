import { Request, Response } from 'express';
import { connection } from '../..';

export const createAccount = (request: Request, response: Response) => {
	const { email, phoneNumber, password } = request.body;
	const checkExistingUserQuery = 'SELECT email FROM User WHERE email=?';
	const registerUserQuery = 'INSERT INTO User SET ?';

	connection.query(checkExistingUserQuery, [email], (error, rows) => {
		if (error) return response.status(500).send('Internal Server Error');

		if (rows.length) {
			return response.status(400).send('Bad Request');
		}

		connection.query(
			registerUserQuery,
			{ email, phoneNumber, password },
			(error, rows) => {
				if (error) return response.status(500).send('Internal Server Error');

				return response.status(201).send('User registered successfully');
			}
		);
	});
};
