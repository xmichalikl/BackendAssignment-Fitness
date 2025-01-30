import { Router } from 'express';
import { ExerciseController } from '@/controllers';
import { RoleMiddleware } from '@/middlewares';

const router: Router = Router();
router.get('/', ExerciseController.getAllExercises);
router.get('/admin', RoleMiddleware(['ADMIN']), ExerciseController.getAllExercises);

export default router;
