import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';

export const verifyAccessToken = (
	request: Request,
	response: Response,
	next: NextFunction
) => {
	if (request.cookies.accessToken) {
		const accessTokenKey = process.env.ACCESS_TOKEN_SECRET || '';
		const accessToken = request.cookies.accessToken.split('Bearer ')[1];

		jwt.verify(accessToken, accessTokenKey, (error: any) => {
			if (error) return response.status(401).send('Unauthorized');

			next();
		});
	}
};
