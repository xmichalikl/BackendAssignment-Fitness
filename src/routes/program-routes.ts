import { Router } from 'express';
import { ProgramController } from '@/controllers';
import { AuthMiddleware, RoleMiddleware } from '@/middlewares';

const router: Router = Router();

router.get('/', ProgramController.getAllPrograms);

router.use(AuthMiddleware);
router.patch('/:programId/exercises/:exerciseId', RoleMiddleware(['ADMIN']), ProgramController.addExercise);
router.delete('/:programId/exercises/:exerciseId', RoleMiddleware(['ADMIN']), ProgramController.removeExercise);

export default router;
