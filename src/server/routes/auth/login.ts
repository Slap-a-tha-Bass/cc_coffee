import * as express from 'express';
import * as jwt from 'jsonwebtoken';
import { authenticate } from 'passport';
import { ReqUsers } from '../../../../types';
import { token_key } from '../../../../utils/api-service';
import { jwtConfig } from '../../config';

const router = express.Router();

router.post('/', authenticate('local'), async (req: ReqUsers, res) => {
    try {
        jwt.sign({ userid: req.user.id, email: req.user.email, role:1 },
            jwtConfig.secret,
            { expiresIn: jwtConfig.expires});
            res.json(token_key);
            return;
    } catch (error) {
        res.status(500).json({ message: 'Login error' })
    }
})

export default router;