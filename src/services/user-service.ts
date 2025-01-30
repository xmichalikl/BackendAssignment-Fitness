import { prisma } from '@/config/prisma';
import { UserUpdateDto } from '@/types';

export async function getAllUsers() {
  return await prisma.user.findMany();
}

export async function getUser(userId: number) {
  return await prisma.user.findUnique({
    where: { id: userId },
  });
}

export async function updateUser(userId: number, userDto: UserUpdateDto) {
  return await prisma.user.update({
    where: { id: userId },
    data: { ...userDto },
  });
}
