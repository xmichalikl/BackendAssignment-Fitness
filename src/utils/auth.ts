import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import { UserJwt } from '@/types';

export async function generateHashedPassword(password: string) {
  return await bcrypt.hash(password, 10);
}

export async function verifyPassword(password: string, encryptedPassword: string) {
  return await bcrypt.compare(password, encryptedPassword);
}

export function generateAccessToken(user: UserJwt) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '60h' });
}

export function verifyAccessToken(token: string) {
  return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
}
