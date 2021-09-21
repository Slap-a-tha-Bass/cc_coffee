import * as express from 'express';
import db_orders from '../../db/queries/orders';

const router = express.Router();

router.get('/', async (req,res) => {
    try {
        const food = await db_orders.get_food();
        res.json(food);
    } catch (error) {
        res.status(500).json({ message: 'Problem fetching all food', error: error.message });
    }
})

export default router;