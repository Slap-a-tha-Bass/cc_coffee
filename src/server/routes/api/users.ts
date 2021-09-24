import * as express from 'express';
import * as passport from 'passport';
import { ReqUsers } from '../../../../types';
import db_users from '../../db/queries/users';

const router = express.Router();

router.get('/', passport.authenticate('jwt'), async (req: ReqUsers, res) => {
    try {
        res.json(`Welcome, ${req.user.email}!`);
    } catch (error) {
        res.status(500).json({ message: "Check GET or TOKEN on users.ts", error: error.message });
    }
})

export default router;

