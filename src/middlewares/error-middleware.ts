import { AppError } from '@/types';
import { Request, Response, NextFunction } from 'express';

export function errorHandlerMiddleware(err: Error, req: Request, res: Response, next: NextFunction) {
  let message = 'Something went wrong';
  let status = 500;

  if (err instanceof AppError) {
    message = err.message;
    status = err.status;
  }

  res.status(status).json({ data: {}, message });
}
