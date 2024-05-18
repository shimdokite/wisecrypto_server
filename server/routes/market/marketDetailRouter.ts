import express from 'express';
import { getMarketDetail } from '../../controllers/market/marketDetailController';

const router = express.Router();

export default router.get('/', getMarketDetail);
