import { Router } from 'express';
import { AuthController } from '@/controllers';
import { ValidatorMiddleware } from '@/middlewares';
import { signInValidate, signUpValidate } from '@/validators';

const router: Router = Router();

router.post('/signup', ValidatorMiddleware(signUpValidate), AuthController.signUp);
router.post('/signin', ValidatorMiddleware(signInValidate), AuthController.signIn);

export default router;
