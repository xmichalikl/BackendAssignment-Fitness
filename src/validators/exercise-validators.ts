import { query } from 'express-validator';

export const getAllExercisesValidate = [
  query('page').optional().isInt({ min: 1 }).withMessage(''),
  query('limit').optional().isInt({ min: 1 }).withMessage(''),
  query('programId').optional().isInt({ min: 1 }).withMessage(''),
  query('search').optional().isString().trim().isLength({ min: 2 }).withMessage(''),
];
