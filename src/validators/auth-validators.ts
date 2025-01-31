import { body } from 'express-validator';
import { USER_ROLE } from '@prisma/client';

export const signUpValidate = [
  body('role')
    .isIn(Object.values(USER_ROLE))
    .withMessage((value, { req }) => req.__('validation.errors.invalidValue', { field: 'role' })),

  body('email')
    .isEmail()
    .withMessage((value, { req }) => req.__('validation.errors.invalidFormat', { field: 'email' }))
    .normalizeEmail(),

  body('password')
    .isLength({ min: 8 })
    .withMessage((value, { req }) => req.__('validation.errors.minLength', { field: 'password', min: 8 }))
    .matches(/[A-Z]/)
    .withMessage((value, { req }) =>
      req.__('validation.errors.missingCharacter', { field: 'password', type: 'uppercase letter' }),
    )
    .matches(/[a-z]/)
    .withMessage((value, { req }) =>
      req.__('validation.errors.missingCharacter', { field: 'password', type: 'lowercase letter' }),
    )
    .matches(/\d/)
    .withMessage((value, { req }) =>
      req.__('validation.errors.missingCharacter', { field: 'password', type: 'number' }),
    ),
];

export const signInValidate = [
  body('email')
    .isEmail()
    .withMessage((value, { req }) => req.__('validation.errors.invalidFormat', { field: 'email' }))
    .normalizeEmail(),

  body('password')
    .isString()
    .withMessage((value, { req }) => req.__('validation.errors.requiredField', { field: 'password' })),
];
