import { Router } from 'express';
import { ExerciseController } from '@/controllers';
import { AuthMiddleware, RoleMiddleware } from '@/middlewares';

const router: Router = Router();

router.get('/', ExerciseController.getAllExercises);

router.use(AuthMiddleware, RoleMiddleware(['ADMIN']));
router.post('/', ExerciseController.createExercise);
router.put('/:exerciseId', ExerciseController.updateExercise);
router.delete('/:exerciseId', ExerciseController.deleteExercise);
router.patch('/:exerciseId/program/:programId', ExerciseController.addProgram);
router.delete('/:exerciseId/program/:programId', ExerciseController.removeProgram);

export default router;
