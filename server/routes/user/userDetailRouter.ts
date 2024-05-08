import express from 'express';
import { verifyAccessToken } from '../../middleware/verify';
import {
	editUserDetail,
	getUserDetail,
} from '../../controllers/user/userDetailController';

const router = express.Router();

router.get('/', verifyAccessToken, getUserDetail);

router.patch('/', verifyAccessToken, editUserDetail);

module.exports = router;
