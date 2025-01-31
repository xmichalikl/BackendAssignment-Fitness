import { Request, Response, NextFunction } from 'express';
import { SignInFormDto, SignUpFormDto } from '@/types';
import { AuthService } from '@/services';

export async function signUp(req: Request, res: Response, next: NextFunction) {
  try {
    const form: SignUpFormDto = req.body;
    const user = await AuthService.signUp(form);
    res.json({ data: user, message: req.__('auth.signUp.success') });
  } catch (error) {
    next(error);
  }
}

export async function signIn(req: Request, res: Response, next: NextFunction) {
  try {
    const form: SignInFormDto = req.body;
    const accessToken = await AuthService.signIn(form);
    res.json({ data: accessToken, message: req.__('auth.signIn.success') });
  } catch (error) {
    next(error);
  }
}
