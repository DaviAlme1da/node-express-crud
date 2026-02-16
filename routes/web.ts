import { Router } from "express"
import clienteController from "../controllers/ClientConroller.js"
import soAdmin from "../middlewares/soAdmin.js";
import soLogin from "../middlewares/soLogin.js";

const router = Router();

router.get('/', clienteController.login)
router.post('/login', clienteController.validar)
router.get('/cadastro', clienteController.cadastro)
router.post('/cadastro', clienteController.cadastroPost)
router.get('/home',soLogin, clienteController.home)
router.get('/clients',soLogin, clienteController.index);
router.get('/clients/create',soAdmin,clienteController.create);
router.post('/clients', clienteController.store);
router.get('/clients/:id',soLogin,clienteController.show);
router.put('/clients/:id', clienteController.update);
router.get('/clients/:id/edit',soAdmin, clienteController.edit);
router.delete('/clients/:id',soAdmin, clienteController.destroy)


export default router;