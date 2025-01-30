import { Request, Response, NextFunction } from 'express';
import { SignInFormDto, SignUpFormDto } from '@/types';
import { AuthService } from '@/services';

export async function signUp(req: Request, res: Response, next: NextFunction) {
  const form: SignUpFormDto = req.body;
  const user = await AuthService.signUp(form);
  res.json(user);
}

export async function signIn(req: Request, res: Response, next: NextFunction) {
  const form: SignInFormDto = req.body;
  const user = await AuthService.signIn(form);
  res.json(user);
}
