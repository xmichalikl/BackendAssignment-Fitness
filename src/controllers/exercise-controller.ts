import { Request, Response, NextFunction } from 'express';
import { ExerciseService } from '@/services';
import { ExerciseInsertDto, ExerciseUpdateDto } from '@/types';
import { Pagination } from '@/types';

export async function getAllExercises(req: Request, res: Response, next: NextFunction) {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;
  const programId = parseInt(req.query.programId as string) || undefined;
  const nameSearch = (req.query.search as string) || undefined;

  const pagination: Pagination = {
    page: page >= 1 ? page : 1,
    limit: limit >= 1 ? limit : 1,
  };

  try {
    const exercises = await ExerciseService.getAllExercises(pagination, programId, nameSearch);
    res.json({ data: exercises, message: 'List of exercises' });
  } catch (error) {
    next(error);
  }
}

export async function createExercise(req: Request, res: Response, next: NextFunction) {
  try {
    const exerciseDto: ExerciseInsertDto = req.body;

    const exercise = await ExerciseService.createExercise(exerciseDto);
    res.json({ data: exercise, message: 'You have successfully created exercise' });
  } catch (error) {
    next(error);
  }
}

export async function updateExercise(req: Request, res: Response, next: NextFunction) {
  try {
    const exerciseId: number = parseInt(req.params.exerciseId);
    const exerciseDto: ExerciseUpdateDto = req.body;

    const exercise = await ExerciseService.updateExercise(exerciseId, exerciseDto);
    res.json({ data: exercise, message: 'You have successfully updated exercise' });
  } catch (error) {
    next(error);
  }
}

export async function deleteExercise(req: Request, res: Response, next: NextFunction) {
  try {
    const exerciseId: number = parseInt(req.params.exerciseId);

    const exercise = await ExerciseService.deleteExercise(exerciseId);
    res.json({ data: exercise, message: 'You have successfully deleted exercise' });
  } catch (error) {
    next(error);
  }
}
