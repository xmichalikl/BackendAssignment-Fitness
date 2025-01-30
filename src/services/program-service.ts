import { prisma } from '@/config/prisma';

export async function getAllPrograms() {
  return await prisma.program.findMany();
}
