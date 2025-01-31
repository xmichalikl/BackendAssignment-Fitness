import { query } from 'express-validator';

export const getAllExercisesValidate = [
  query('page')
    .optional()
    .isInt({ min: 1 })
    .withMessage((value, { req }) => req.__('validation.errors.minValue', { field: 'page', min: 1 })),

  query('limit')
    .optional()
    .isInt({ min: 1 })
    .withMessage((value, { req }) => req.__('validation.errors.minValue', { field: 'limit', min: 1 })),

  query('programId')
    .optional()
    .isInt({ min: 1 })
    .withMessage((value, { req }) => req.__('validation.errors.minValue', { field: 'programId', min: 1 })),

  query('search')
    .optional()
    .isString()
    .trim()
    .isLength({ min: 2 })
    .withMessage((value, { req }) => req.__('validation.errors.minLength', { field: 'search', min: 2 })),
];
