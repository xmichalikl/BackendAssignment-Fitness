import { Router } from 'express';
import { ExerciseController, ExerciseTrackingController } from '@/controllers';
import { AuthMiddleware, RoleMiddleware, ValidatorMiddleware } from '@/middlewares';
import { getAllExercisesValidate } from '@/validators';

const router: Router = Router();

router.get('/', ValidatorMiddleware(getAllExercisesValidate), ExerciseController.getAllExercises);

router.use(AuthMiddleware);
router.get('/tracking/me', RoleMiddleware(['USER']), ExerciseTrackingController.getUserExerciseTrackings);
router.post('/tracking', RoleMiddleware(['USER']), ExerciseTrackingController.createExerciseTracking);
router.delete('/tracking/:trackingId', RoleMiddleware(['USER']), ExerciseTrackingController.deleteExerciseTracking);

router.post('/', RoleMiddleware(['ADMIN']), ExerciseController.createExercise);
router.put('/:exerciseId', RoleMiddleware(['ADMIN']), ExerciseController.updateExercise);
router.delete('/:exerciseId', RoleMiddleware(['ADMIN']), ExerciseController.deleteExercise);

export default router;
