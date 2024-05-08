import express from 'express';

import { matchUserInfomation } from '../../controllers/user/loginController';

const router = express.Router();

export default router.post('/', matchUserInfomation);
