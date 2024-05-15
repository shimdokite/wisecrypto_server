import express from 'express';
import { getMarketDetail } from '../../controllers/market/marketDetailController_1';

const router = express.Router();

export default router.get('/', getMarketDetail);
