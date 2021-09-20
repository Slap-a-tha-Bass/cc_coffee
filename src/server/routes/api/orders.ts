import * as express from 'express';
import db_orders from '../../db/queries/orders';
import { orders } from '../../../../types';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const get_orders = await db_orders.get_orders();
        res.json(get_orders);
    } catch (error) {
        res.status(500).json({ message: 'Problem fetching all orders', error: error.message });
    }
});
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const [get_1_order] = await db_orders.get_1_order(id);
        res.json(get_1_order);
    } catch (error) {
        res.status(500).json({ message: 'Problem fetching 1 order', error: error.message });
    }
});
router.post('/', async (req, res) => {
    const id = uuidv4();
    const { drink_type, food_type, price } = req.body;
    if(!drink_type || !price) {
        res.status(400).json({ message: 'Please fill out drink field'});
    }
    const newOrderObject: orders = { id, drink_type, food_type, price };
    try {
       const post_order = await db_orders.post_order(newOrderObject);
       res.status(201).json({ message: 'Order created', id });
    } catch (error) {
        res.status(500).json({ message: 'Problem creating order', error: error.message });
    }
});

export default router;