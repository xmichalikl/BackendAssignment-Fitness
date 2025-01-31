import { ProgramService } from '@/services';
import { Request, Response, NextFunction } from 'express';

export async function getAllPrograms(req: Request, res: Response, next: NextFunction) {
  try {
    const programs = await ProgramService.getAllPrograms();
    res.json({ data: programs, message: req.__('programs.getAllPrograms.success') });
  } catch (error) {
    next(error);
  }
}

export async function addExercise(req: Request, res: Response, next: NextFunction) {
  try {
    const programId: number = parseInt(req.params.programId);
    const exerciseId: number = parseInt(req.params.exerciseId);

    const exercise = await ProgramService.addExercise(programId, exerciseId);
    res.json({ data: exercise, message: req.__('programs.addExercise.success') });
  } catch (error) {
    next(error);
  }
}

export async function removeExercise(req: Request, res: Response, next: NextFunction) {
  try {
    const programId: number = parseInt(req.params.programId);
    const exerciseId: number = parseInt(req.params.exerciseId);

    const exercise = await ProgramService.removeExercise(programId, exerciseId);
    res.json({ data: exercise, message: req.__('programs.removeExercise.success') });
  } catch (error) {
    next(error);
  }
}
