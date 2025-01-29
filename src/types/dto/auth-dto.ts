import { USER_ROLE } from '@/utils/enums';

export type SignUpFormDto = {
  name: string;
  surname: string;
  age: number;
  nickName: string;
  email: string;
  password: string;
  role: USER_ROLE;
};

export type SignInFormDto = {
  email: string;
  password: string;
};
