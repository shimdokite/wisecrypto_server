import express from 'express';
import { verifyAccessToken } from '../../middleware/verify';
import { getUserDetail } from '../../controllers/users/userDetailController';

const router = express.Router();

export default router.get('/', verifyAccessToken, getUserDetail);
