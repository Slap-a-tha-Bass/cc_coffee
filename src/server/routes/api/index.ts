import * as express from 'express';
import ordersRouter from './orders';
import drinksRouter from './drinks';
import foodRouter from './food';
import usersRouter from './users';

const router = express.Router();

router.use('/orders', ordersRouter);
router.use('/drinks', drinksRouter);
router.use('/food', foodRouter);
router.use('/users', usersRouter);

export default router;