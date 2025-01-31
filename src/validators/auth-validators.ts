import { body } from 'express-validator';
import { USER_ROLE } from '@prisma/client';
import { ValidationErrorMessage } from '@/types';

export const signUpValidate = [
  body('role')
    .isIn(Object.values(USER_ROLE))
    .withMessage(
      (): ValidationErrorMessage => ({
        key: 'validation.errors.invalidValue',
        params: { field: 'role' },
      }),
    ),

  body('email')
    .isEmail()
    .withMessage(
      (): ValidationErrorMessage => ({
        key: 'validation.errors.invalidFormat',
        params: { field: 'email' },
      }),
    )
    .normalizeEmail(),

  body('password')
    .isLength({ min: 8 })
    .withMessage(
      (): ValidationErrorMessage => ({
        key: 'validation.errors.minLength',
        params: { field: 'password', min: 8 },
      }),
    )
    .matches(/[A-Z]/)
    .withMessage(
      (): ValidationErrorMessage => ({
        key: 'validation.errors.missingCharacter',
        params: { field: 'password', type: 'uppercase letter' },
      }),
    )
    .matches(/[a-z]/)
    .withMessage(
      (): ValidationErrorMessage => ({
        key: 'validation.errors.missingCharacter',
        params: { field: 'password', type: 'lowercase letter' },
      }),
    )
    .matches(/\d/)
    .withMessage(
      (): ValidationErrorMessage => ({
        key: 'validation.errors.missingCharacter',
        params: { field: 'password', type: 'number' },
      }),
    ),
];

export const signInValidate = [
  body('email')
    .isEmail()
    .withMessage(
      (): ValidationErrorMessage => ({
        key: 'validation.errors.invalidFormat',
        params: { field: 'email' },
      }),
    )
    .normalizeEmail(),

  body('password')
    .isString()
    .withMessage(
      (): ValidationErrorMessage => ({
        key: 'validation.errors.requiredField',
        params: { field: 'password' },
      }),
    ),
];
