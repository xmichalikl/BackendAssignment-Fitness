import { prisma } from '@/config/prisma';

export async function getAllExercises() {
  return await prisma.exercise.findMany({
    include: { program: true },
  });
}
