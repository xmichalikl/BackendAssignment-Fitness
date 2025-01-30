import { Request, Response, NextFunction } from 'express';
import { ExerciseService } from '@/services';

export async function getAllExercises(_req: Request, res: Response, _next: NextFunction) {
  const exercises = await ExerciseService.getAllExercises();
  res.json({ data: exercises, message: 'List of exercises' });
}
