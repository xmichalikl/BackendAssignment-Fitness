import { body } from 'express-validator';
import { USER_ROLE } from '@prisma/client';

export const signUpValidate = [
  body('role').isIn(Object.values(USER_ROLE)).withMessage('Neplatná rola používateľa'),
  body('email').isEmail().withMessage('Neplatný emailový formát').normalizeEmail(),
  body('password')
    .isLength({ min: 8 })
    .withMessage('Heslo musí mať aspoň 8 znakov')
    .matches(/[A-Z]/)
    .withMessage('Heslo musí obsahovať aspoň jedno veľké písmeno')
    .matches(/[a-z]/)
    .withMessage('Heslo musí obsahovať aspoň jedno malé písmeno')
    .matches(/\d/)
    .withMessage('Heslo musí obsahovať aspoň jedno číslo'),
];

export const signInValidate = [
  body('email').isEmail().withMessage('Neplatný emailový formát').normalizeEmail(),
  body('password').isString().withMessage('Heslo musí byť platný textový reťazec'),
];
