import { Request, Response, NextFunction } from 'express';
import { SignInFormDto, SignUpFormDto } from '@/types';
import { AuthService } from '@/services';
import { access } from 'fs';

export async function signUp(req: Request, res: Response, next: NextFunction) {
  try {
    const form: SignUpFormDto = req.body;
    const user = await AuthService.signUp(form);
    res.json(user);
  } catch (error) {
    next(error);
  }
}

export async function signIn(req: Request, res: Response, next: NextFunction) {
  try {
    const form: SignInFormDto = req.body;
    const accessToken = await AuthService.signIn(form);
    res.json({ data: accessToken });
  } catch (error) {
    next(error);
  }
}
