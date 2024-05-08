import { NextFunction, Request, Response, RequestHandler } from 'express';
import * as jwt from 'jsonwebtoken';

export const verifyAccessToken = (
	request: Request,
	response: Response,
	next: NextFunction
) => {
	if (request.cookies.accessToken) {
		const accessTokenKey = process.env.ACCESS_TOKEN_SECRET || '';
		const accessToken = request.cookies.accessToken.replace('Bearer ', '');
		const decodedToken = jwt.decode(accessToken) as jwt.JwtPayload;

		request.cookies.userId = decodedToken.id;

		jwt.verify(accessToken, accessTokenKey, (error: any) => {
			if (error) return response.status(401).send('Unauthorized');

			next();
		});
	} else {
		return response.status(401).send('Unauthorized');
	}
};
