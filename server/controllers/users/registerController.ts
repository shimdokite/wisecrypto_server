import { Request, Response } from 'express';

import { db } from '../..';

export const createAccount = (request: Request, response: Response) => {
	const { name, phoneNumber, position, email, password } = request.body;

	const userInfo = {
		name,
		phoneNumber,
		position,
		email,
		password,
	};

	if (position === 'Pengguna') {
		db.collection('users')
			.doc('Pengguna')
			.set({ ...userInfo });

		return response.status(201).send('Create Account!');
	}

	if (position === 'Pengelola') {
		db.collection('users')
			.doc('Pengelola')
			.set({ ...userInfo });

		return response.status(201).send('Create Account!');
	}

	return response.status(400).send('Bad Request');
};
