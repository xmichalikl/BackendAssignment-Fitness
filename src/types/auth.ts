import { User } from '@prisma/client';

export type UserJwt = Pick<User, 'id' | 'email' | 'role'>;
