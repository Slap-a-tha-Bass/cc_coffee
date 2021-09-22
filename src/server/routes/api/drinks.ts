import * as express from 'express';
import db_orders from '../../db/queries/orders';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const drinks = await db_orders.get_drinks();
        res.json(drinks);
    } catch (error) {
        res.status(500).json({ message: 'Problem fetching all drinks', error: error.message });
    }
})
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [drink] = await db_orders.get_1_drink(id);
        res.json(drink);
    } catch (error) {
        res.status(500).json({ message: 'Problem fetching all drinks', error: error.message });
    }
});

export default router;
