import { prisma } from '@/config/prisma';
import { AppError, ExerciseInsertDto, ExerciseUpdateDto } from '@/types';

export async function getAllExercises() {
  return await prisma.exercise.findMany({
    include: { program: true },
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
