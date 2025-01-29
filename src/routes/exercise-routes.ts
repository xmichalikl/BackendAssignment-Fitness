import { Router } from 'express';
import { ExerciseController } from '@/controllers';

const router: Router = Router();
router.get('/', ExerciseController.getAllExercises);

export default router;
