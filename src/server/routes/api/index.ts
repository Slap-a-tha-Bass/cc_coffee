import * as express from 'express';
import ordersRouter from './orders';
import drinksRouter from './drinks';
import foodRouter from './food';

const router = express.Router();

router.use('/orders', ordersRouter);
router.use('/drinks', drinksRouter);
router.use('/food', foodRouter);

export default router;