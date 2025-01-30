import { Request, Response, NextFunction } from 'express';
import { passport } from '@/config/passport';
import { AppError, UserJwt } from '@/types';

export default function authMiddleware(req: Request, res: Response, next: NextFunction) {
  passport.authenticate('jwt', { session: false }, (err: Error | null, user: UserJwt | false) => {
    if (err) return next(err);
    if (!user) return next(new AppError('Unauthorized Access', 401));
    req.user = user;
    next();
  })(req, res, next);
}
