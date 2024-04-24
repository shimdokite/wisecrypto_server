import express from 'express';

import { matchUserInfomation } from '../../controllers/users/loginController';

const router = express.Router();

export default router.post('/', matchUserInfomation);
