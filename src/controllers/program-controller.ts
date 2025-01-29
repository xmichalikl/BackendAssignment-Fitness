import { ProgramService } from '@/services';
import { Request, Response, NextFunction } from 'express';

export async function getAllPrograms(_req: Request, res: Response, _next: NextFunction) {
  const programs = await ProgramService.getAllPrograms();
  return res.json({ data: programs, message: 'List of programs' });
}
