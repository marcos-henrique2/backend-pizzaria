import { Router} from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { isAuthenticated } from "./middleware/isAuthenticated";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCadegoryController } from "./controllers/category/ListCategoryController";
import { CreatProductController } from "./controllers/product/CreatProductController";
import uploadConfig from './config/multer';
import multer from "multer";
import { ListByCategoryController } from "./controllers/product/ListByCategoryController";
import { CreatOrderController } from "./controllers/order/CreatOrderController";
import { RemoveOrderController } from "./controllers/order/RemoveOrderController";
import { AddItemController } from "./controllers/order/AddItemController";
import { RemoveItemController } from "./controllers/order/RemoveItemController";
import { SendOrderController } from "./controllers/order/SendOrderController";
import { ListOrdersController } from "./controllers/order/ListOrdersController";
import { DetailOrderController } from "./controllers/order/DetailOrderController";
import { FinishOrderController } from "./controllers/order/FinishOrderController";

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

//-- Rotas User --
router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/me', isAuthenticated, new DetailUserController().handle)

//-- Rotas Category --
router.post('/category', isAuthenticated, new CreateCategoryController().handle)
router.get('/category', isAuthenticated, new ListCadegoryController().handle)

//-- Rotas Product --
router.post('/product', isAuthenticated, upload.single('file'), new CreatProductController().handle)
router.get('/category/product', isAuthenticated, new ListByCategoryController().handle)

//-- Rotas order --
router.post('/order', isAuthenticated, new CreatOrderController().handle)
router.delete('/order', isAuthenticated, new RemoveOrderController().handle)
router.post('/order/add', isAuthenticated, new AddItemController().handle)
router.delete('/order/remove', isAuthenticated, new RemoveItemController().handle)
router.put('/order/send', isAuthenticated, new SendOrderController().handle)
router.get('/orders', isAuthenticated, new ListOrdersController().handle)
router.get('/order/detail', isAuthenticated, new DetailOrderController().handle)
router.put('/order/finish', isAuthenticated, new FinishOrderController().handle)

export {router};