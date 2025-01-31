import { AppError, ValidationErrorMessage } from '@/types';
import { Request, Response, NextFunction } from 'express';
import { ValidationChain, validationResult } from 'express-validator';

export default function validatorMiddleware(validations: ValidationChain[]) {
  return async (req: Request, res: Response, next: NextFunction) => {
    await Promise.all(validations.map((validation) => validation.run(req)));

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const firstError = errors.array().at(0);
      if (typeof firstError.msg === 'object' && 'key' in firstError.msg) {
        const errorMessage = firstError.msg as ValidationErrorMessage;
        return next(new AppError(errorMessage.key, 400, errorMessage.params));
      }
      return next(new AppError('validation.errors.invalidRequest', 400));
    }
    next();
  };
}
