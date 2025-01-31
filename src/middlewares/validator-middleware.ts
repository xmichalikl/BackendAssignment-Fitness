import { AppError } from '@/types';
import { Request, Response, NextFunction } from 'express';
import { ValidationChain, validationResult } from 'express-validator';

export default function validatorMiddleware(validations: ValidationChain[]) {
  return async (req: Request, res: Response, next: NextFunction) => {
    await Promise.all(validations.map((validation) => validation.run(req)));

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(new AppError(errors.array().at(0).msg || req.__('middleware.validator.badRequest'), 400));
    }
    next();
  };
}
