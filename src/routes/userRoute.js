import { Router } from 'express';
import { userRegister, userLogin } from '../controllers/userController.js';
import { validateRegister, validateLogin } from '../middlewares/validation.js';

const router = Router();

router.post('/register', [validateRegister, userRegister]);
router.post('/login', [validateLogin, userLogin]);

export { router as userRoute };
