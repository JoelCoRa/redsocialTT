import {Router} from 'express';
import { newUser, loginUser, getUser } from '../controllers/user.controller';
import validateToken from './validateToken';

const router = Router();


router.post('/', newUser);
router.post('/login', loginUser);
// router.get('/getuser', getUser);


export default router;


