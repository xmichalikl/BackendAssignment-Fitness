import { UserController } from '@/controllers';
import { AuthMiddleware, RoleMiddleware } from '@/middlewares';
import { Router } from 'express';

const router: Router = Router();

router.use(AuthMiddleware, RoleMiddleware(['ADMIN']));
router.get('/', UserController.getAllUsers);
router.get('/:userId', UserController.getUser);
router.put('/:userId', UserController.updateUser);

export default router;
