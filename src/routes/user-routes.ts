import { UserController } from '@/controllers';
import { AuthMiddleware, RoleMiddleware } from '@/middlewares';
import { Router } from 'express';

const router: Router = Router();

router.use(AuthMiddleware);
router.get('/profiles/me', RoleMiddleware(['USER']), UserController.getUserProfile);
router.get('/profiles', RoleMiddleware(['USER']), UserController.getAllUserProfiles);

router.put('/:userId', RoleMiddleware(['ADMIN']), UserController.updateUser);
router.get('/:userId', RoleMiddleware(['ADMIN']), UserController.getUser);
router.get('/', RoleMiddleware(['ADMIN']), UserController.getAllUsers);

export default router;
