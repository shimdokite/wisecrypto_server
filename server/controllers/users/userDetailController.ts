// 토큰값을 확인해서 토큰값과 일치하는지, 토큰이 유효한지 검증 후 User 데이터 값 응답하기
// 현재는 엑세스 토큰만 검증하지만, 엑세스 토큰이 만료되면, 리프레쉬 토큰도 검증해서 분기 처리

import { FieldPacket, RowDataPacket } from 'mysql2';
import { db } from '../../db';
import { Request, Response } from 'express';

interface UserDetail extends RowDataPacket {
	id: string;
	email: string;
}

export const getUserDetail = async (request: Request, response: Response) => {
	const promisePool = db.promise();
	const id = request.cookies.userId;

	const userDetailQuery = 'SELECT id, email FROM User WHERE id=?';

	try {
		const [rows]: [UserDetail[], FieldPacket[]] = await promisePool.query(
			userDetailQuery,
			[id]
		);

		if (rows.length === 0) return response.status(401).send('Unauthorized');

		return response.status(200).send(rows);
	} catch (error) {
		return response.status(500).send('Internal Server Error');
	}
};
