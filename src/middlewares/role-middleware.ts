import { Request, Response, NextFunction } from 'express';
import { AppError, UserJwt } from '@/types';
import { USER_ROLE } from '@prisma/client';

export default function roleMiddleware(roles: Array<USER_ROLE>, ownData = false) {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = req.user as UserJwt;
    const { userId } = req.params;

    if (!user) return next(new AppError('Unauthorized Access', 401));
    if (user.role === USER_ROLE.ADMIN) return next();

    if (roles.length && !roles.includes(user.role)) return next(new AppError('Insufficient Permissions', 403));
    if (ownData && userId && parseInt(userId) !== user.id) return next(new AppError('Unauthorized Access', 401));
    next();
  };
}
