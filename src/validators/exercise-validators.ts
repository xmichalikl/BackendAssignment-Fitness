import { ValidationErrorMessage } from '@/types';
import { query } from 'express-validator';

export const getAllExercisesValidate = [
  query('page')
    .optional()
    .isInt({ min: 1 })
    .withMessage(
      (): ValidationErrorMessage => ({ key: 'validation.errors.minValue', params: { field: 'page', min: 1 } }),
    ),

  query('limit')
    .optional()
    .isInt({ min: 1 })
    .withMessage(
      (): ValidationErrorMessage => ({ key: 'validation.errors.minValue', params: { field: 'limit', min: 1 } }),
    ),

  query('programId')
    .optional()
    .isInt({ min: 1 })
    .withMessage(
      (): ValidationErrorMessage => ({ key: 'validation.errors.minValue', params: { field: 'programId', min: 1 } }),
    ),

  query('search')
    .optional()
    .isString()
    .trim()
    .isLength({ min: 2 })
    .withMessage(
      (): ValidationErrorMessage => ({ key: 'validation.errors.minLength', params: { field: 'search', min: 2 } }),
    ),
];
