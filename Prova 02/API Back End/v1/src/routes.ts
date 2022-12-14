import Router from 'express';
import 'express-async-errors';
import {CreateCategoryController} from './controllers/categoria/CreateCategoryController';
import {CreateUserController} from './controllers/user/CreateUserController';

const router = Router();
const createUserController = new CreateUserController();
const createCategoryController = new CreateCategoryController();

router.post('/usuarios', createUserController.post);
router.get('/usuarios', createUserController.get);
router.get('/usuario/:id', createUserController.getUnique);
router.put('/usuarios/:id', createUserController.put);
router.delete('/usuarios/:id', createUserController.delete);

router.post('/categorias', createCategoryController.post);
router.get('/categorias', createCategoryController.get);
router.get('/categoria/:id', createCategoryController.getUnique);
router.put('/categorias/:id', createCategoryController.put);
router.delete('/categorias/:id', createCategoryController.delete);

export {router};