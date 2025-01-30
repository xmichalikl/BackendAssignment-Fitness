import { USER_ROLE } from '@prisma/client';

export type SignUpFormDto = { email: string; password: string; role?: USER_ROLE };
export type SignInFormDto = { email: string; password: string };
