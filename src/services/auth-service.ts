import { Op } from 'sequelize';
import { models } from '@/config/sequelize';
import { SignInFormDto, SignUpFormDto } from '@/types';
import { hashPassword, verifyPassword } from '@/utils';

const { User } = models;

export async function signUp(form: SignUpFormDto) {
  // Check for existing user by email
  const existingUser = await User.findOne({
    where: { email: { [Op.iLike]: form.email } },
  });

  if (existingUser) throw new Error('User with this email already exists');

  // Create new user
  form.password = await hashPassword(form.password);
  return await User.create(form);
}

export async function signIn(form: SignInFormDto) {
  const user = await User.findOne({
    where: { email: form.email },
  });
  console.log(user);
  //if (!user) throw new Error('User with this email does not exists');

  // Check password
  // if (await verifyPassword(form.password, user))
  return;
}
