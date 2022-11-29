import Router from 'express';
import 'express-async-errors';
import {CreateCategoryController} from './controllers/categoria/CreateCategoryController';
import {CreateUserController} from './controllers/user/CreateUserController';
import {CreateComandaController} from './controllers/comanda/CreateComandaController';
import {CreateProductController} from './controllers/produto/CreateProductController';
import { CreateItemController } from './controllers/item/CreateItemController';

const router = Router();
const createUserController = new CreateUserController();
const createCategoryController = new CreateCategoryController();
const createComandaController = new CreateComandaController();
const createProductController = new CreateProductController();
const createItemController = new CreateItemController();

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

router.post('/comandas', createComandaController.post);
router.get('/comandas', createComandaController.get);
router.get('/comanda/:id', createComandaController.getUnique);
router.put('/comandas/:id', createComandaController.put);
router.delete('/comandas/:id', createComandaController.delete);

router.post('/produtos', createProductController.post);
router.get('/produtos', createProductController.get);
router.get('/produto/:id', createProductController.getUnique);
router.put('/produtos/:id', createProductController.put);
router.delete('/produtos/:id', createProductController.delete);

router.post('/itens', createItemController.post);
router.get('/itens', createItemController.get);
router.get('/item/:id', createItemController.getUnique);
router.put('/itens/:id', createItemController.put);
router.delete('/itens/:id', createItemController.delete);
export {router};