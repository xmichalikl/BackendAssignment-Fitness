import { ProgramService } from '@/services';
import { Request, Response, NextFunction } from 'express';

export async function getAllPrograms(req: Request, res: Response, next: NextFunction) {
  try {
    const programs = await ProgramService.getAllPrograms();
    res.json({ data: programs, message: 'List of programs' });
  } catch (error) {
    next(error);
  }
}
