import { Request, Response, NextFunction } from 'express';
import { AppError, UserJwt } from '@/types';
import { USER_ROLE } from '@prisma/client';

export default function roleMiddleware(roles: Array<USER_ROLE>) {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = req.user as UserJwt;
    if (!user) return next(new AppError('Unauthorized Access', 401));
    if (!roles.includes(user.role)) return next(new AppError('Insufficient Permissions', 403));
    next();
  };
}
