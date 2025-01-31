import { prisma } from '@/config/prisma';
import { ExerciseInsertDto, ExerciseUpdateDto } from '@/types';
import { Pagination } from '@/types';

export async function getAllExercises(pagination: Pagination, programId?: number, nameSearch?: string) {
  return await prisma.exercise.findMany({
    where: {
      programId: programId,
      name: { contains: nameSearch, mode: 'insensitive' },
    },
    include: { program: true },
    skip: (pagination.page - 1) * pagination.limit,
    take: pagination.limit,
    orderBy: { id: 'asc' },
  });
}

export async function createExercise(exerciseDto: ExerciseInsertDto) {
  return await prisma.exercise.create({
    data: { ...exerciseDto },
  });
}

export async function updateExercise(exerciseId: number, exerciseDto: ExerciseUpdateDto) {
  return await prisma.exercise.update({
    where: { id: exerciseId },
    data: { ...exerciseDto },
  });
}

export async function deleteExercise(exerciseId: number) {
  return await prisma.exercise.delete({
    where: { id: exerciseId },
  });
}
