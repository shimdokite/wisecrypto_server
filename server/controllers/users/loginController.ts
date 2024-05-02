import { Request, Response } from 'express';

export const matchUserInfomation = async (
	request: Request,
	response: Response
) => {
	//TODO: 일반 유저와 관리자 구분해서 받아오기
	// const snapshot = db.collection('users').doc('dokite');
	// const userInfo = await snapshot.get();

	// if (userInfo.exists) {
	// 	request.session.cookie.maxAge = 1000 * 60 * 30;

	// 	return response.status(201).json(userInfo.data());
	// }

	return response.status(401).send('Unauthorized');
};
