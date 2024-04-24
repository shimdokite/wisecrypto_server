import express from 'express';

import { createAccount } from '../../controllers/users/registerController';

const router = express.Router();

export default router.post('/', createAccount);
