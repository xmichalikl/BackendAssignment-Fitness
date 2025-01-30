import { Request, Response, NextFunction } from 'express';
import { ExerciseService } from '@/services';

export async function getAllExercises(req: Request, res: Response, next: NextFunction) {
  try {
    const exercises = await ExerciseService.getAllExercises();
    res.json({ data: exercises, message: 'List of exercises' });
  } catch (error) {
    next(error);
  }
}
