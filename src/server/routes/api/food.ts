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
});
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [food] = await db_orders.get_1_food(id);
        res.json(food);
    } catch (error) {
        res.status(500).json({ message: 'Problem fetching all drinks', error: error.message });
    }
});

export default router;