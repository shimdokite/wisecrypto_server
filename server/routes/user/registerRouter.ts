import express from 'express';

import { createAccount } from '../../controllers/user/registerController';

const router = express.Router();

export default router.post('/', createAccount);
