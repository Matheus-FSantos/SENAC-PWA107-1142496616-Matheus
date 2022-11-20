import Router from 'express';
import 'express-async-errors';
import {CreateUserController} from './controllers/user/CreateUserController';

const router = Router();
const createUserController = new CreateUserController();

router.post('/usuarios', createUserController.post);
router.get('/usuarios', createUserController.get);
router.get('/usuario/:id', createUserController.getUnique);
router.delete('/usuarios/:id', createUserController.delete);

export {router};