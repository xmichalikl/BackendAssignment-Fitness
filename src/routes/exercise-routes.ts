import { Router } from 'express';
import { ExerciseController } from '@/controllers';
import { AuthMiddleware, RoleMiddleware } from '@/middlewares';

const router: Router = Router();

router.get('/', ExerciseController.getAllExercises);

router.use(AuthMiddleware);
router.post('/', RoleMiddleware(['ADMIN']), ExerciseController.createExercise);
router.put('/:exerciseId', RoleMiddleware(['ADMIN']), ExerciseController.updateExercise);
router.delete('/:exerciseId', RoleMiddleware(['ADMIN']), ExerciseController.deleteExercise);

export default router;
