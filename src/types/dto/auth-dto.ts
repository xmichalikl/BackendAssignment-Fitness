import { User } from '@prisma/client';

export type SignUpFormDto = Pick<User, 'email' | 'password' | 'role'>;
export type SignInFormDto = Pick<User, 'email' | 'password'>;
