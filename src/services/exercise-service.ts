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

export async function addProgram(exerciseId: number, programId: number) {
  const exercise = await prisma.exercise.findUnique({ where: { id: exerciseId } });
  const program = await prisma.program.findUnique({ where: { id: programId } });

  if (!exercise) throw new AppError(`Exercise with ${exerciseId} does not exists`, 404);
  if (!program) throw new AppError(`Program with ${programId} does not exists`, 404);
  if (exercise.programId) throw new AppError(`Exercise with ${exerciseId} already has program`, 404);

  return await prisma.exercise.update({
    where: { id: exerciseId },
    data: { programId: programId },
  });
}

export async function removeProgram(exerciseId: number, programId: number) {
  const exercise = await prisma.exercise.findUnique({ where: { id: exerciseId } });
  const program = await prisma.program.findUnique({ where: { id: programId } });

  if (!exercise) throw new AppError(`Exercise with ${exerciseId} does not exists`, 404);
  if (!program) throw new AppError(`Program with ${programId} does not exists`, 404);

  return await prisma.exercise.update({
    where: { id: exerciseId },
    data: { programId: null },
  });
}
