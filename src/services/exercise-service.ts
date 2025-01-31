import { prisma } from '@/config/prisma';
import { ExerciseInsertDto, ExerciseUpdateDto } from '@/types';

export async function getAllExercises(page: number, limit: number) {
  return await prisma.exercise.findMany({
    include: { program: true },
    skip: (page - 1) * limit,
    take: limit,
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
