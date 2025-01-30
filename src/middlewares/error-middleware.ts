import { Request, Response, NextFunction } from 'express';

import { AppError } from '@/types';

export default function errorMiddleware(err: Error, req: Request, res: Response, next: NextFunction) {
  let message = 'Something went wrong';
  let status = 500;

  if (err instanceof AppError) {
    message = err.message;
    status = err.status;
  }

  console.error(err);
  res.status(status).json({ data: {}, message });
}
