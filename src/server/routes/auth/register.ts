import * as express from 'express';
import { generateHash } from '../../utils/passwords';
import db_users from '../../db/queries/users';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

router.post('/', async (req, res) => {
    const { email, password, full_name } = req.body;
    try {
        if(!email || !password){
            res.json({ message: 'Fields not properly completed'});
            return;
        }
        const id = uuidv4();
        const hashed = generateHash(password);
        const newUser = { id, email, password: hashed, full_name };
        const register = await db_users.insert(newUser);
        res.json(register);
    } catch (error) {
        res.status(500).json({ message: 'Registration error', error: error.message })
    }
});

export default router;