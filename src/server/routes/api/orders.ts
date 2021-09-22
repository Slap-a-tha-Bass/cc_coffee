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
    const { id } = req.params;
    try {
        const [get_1_order] = await db_orders.get_1_order(id);
        res.json(get_1_order);
    } catch (error) {
        res.status(500).json({ message: 'Problem fetching 1 order', error: error.message });
    }
});
router.post('/', async (req, res) => {
    const id = uuidv4();
    const { drink_id, food_id, first_name, food_type, drink_type } = req.body;
    try {
        const [whole_food_item] = await db_orders.get_1_food(food_id, food_type);
        const [whole_drink_item] = await db_orders.get_1_drink(drink_id, drink_type);
        const newOrderObject = { id, first_name, price: Number(whole_drink_item.price) + Number(whole_food_item.price), drink_id, food_id, food_type: whole_food_item.food_type, drink_type: whole_drink_item.drink_type };
        const post_order = await db_orders.post_order(newOrderObject);
        res.status(201).json({ message: 'Order created', id });
    } catch (error) {
        res.status(500).json({ message: 'Problem creating order', error: error.message });
    }
});
router.put('/:id/edit', async (req, res) => {
    const { id } = req.params;
    const { drink_type, food_type, drink_id, food_id, price, first_name } = req.body;
    if (!drink_type || !price) {
        res.status(400).json({ message: 'Please fill out drink field' });
    }
    const updatedOrder: orders = { id, drink_type, food_type, drink_id, food_id, price, first_name };
    try {
        const edit_order = await db_orders.edit_order(updatedOrder, id);
        res.status(201).json(updatedOrder);
    } catch (error) {
        res.status(500).json({ message: 'Problem editing order', error: error.message });
    }
});
router.delete('/:id/delete', async (req, res) => {
    const { id } = req.params;
    try {
        const delete_order = await db_orders.delete_order(id);
        res.json({ message: "Order deleted" })
    } catch (error) {
        res.status(500).json({ message: 'Problem deleting order', error: error.message });
    }
});

export default router;