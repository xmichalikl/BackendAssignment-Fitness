import { prisma } from '@/config/prisma';
import { SignInFormDto, SignUpFormDto } from '@/types';
import { hashPassword, verifyPassword } from '@/utils';

export async function signUp(form: SignUpFormDto) {
  // Check for existing user by email
  const existingUser = await prisma.user.findFirst({
    where: { email: { equals: form.email, mode: 'insensitive' } },
  });

  if (existingUser) throw new Error('User with this email already exists');

  // Create new user
  form.password = await hashPassword(form.password);
  return await prisma.user.create({ data: form });
}

export async function signIn(form: SignInFormDto) {
  const user = await prisma.user.findUnique({
    where: { email: form.email },
  });

  if (!user) throw new Error('User does not exists');

  // Check password
  const passwordMatch = await verifyPassword(form.password, user.password);
  if (!passwordMatch) throw new Error('Incorrect password');

  return user;
}
