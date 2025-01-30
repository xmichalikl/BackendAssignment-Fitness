import { prisma } from '@/config/prisma';
import { AppError, SignInFormDto, SignUpFormDto } from '@/types';
import { generateAccessToken, generateHashedPassword, verifyPassword } from '@/utils';

export async function signUp(form: SignUpFormDto) {
  // Check for existing user by email
  const existingUser = await prisma.user.findFirst({
    where: { email: { equals: form.email, mode: 'insensitive' } },
  });

  if (existingUser) throw new AppError('User with this email already exists', 409);

  // Create new user
  form.password = await generateHashedPassword(form.password);
  return await prisma.user.create({ data: form });
}

export async function signIn(form: SignInFormDto) {
  const user = await prisma.user.findUnique({
    where: { email: form.email },
  });

  if (!user) throw new AppError('User does not exists', 404);

  // Check password
  const passwordMatch = await verifyPassword(form.password, user.password);
  if (!passwordMatch) throw new AppError('Incorrect password', 401);

  // Generate access token
  return generateAccessToken({ id: user.id, email: user.email, role: user.role });
}
