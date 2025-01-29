import { Request, Response, NextFunction } from 'express';
import { SignInFormDto, SignUpFormDto } from '@/types';
import { AuthService } from '@/services';

export async function signUp(_req: Request, res: Response, _next: NextFunction) {
  const form: SignUpFormDto = _req.body;
  try {
    const user = await AuthService.signUp(form);
    console.log(user);
    res.json(user);
  } catch (error) {
    console.log(error);
    res.send('error');
  }
}

export async function signIn(_req: Request, res: Response, _next: NextFunction) {
  const form: SignInFormDto = _req.body;
  await AuthService.signIn(form);
  res.send('ok');
}
