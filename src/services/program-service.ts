import { prisma } from '@/config/prisma';
import { AppError } from '@/types';

export async function getAllPrograms() {
  return await prisma.program.findMany();
}

export async function addExercise(programId: number, exerciseId: number) {
  const program = await prisma.program.findUnique({ where: { id: programId } });
  const exercise = await prisma.exercise.findUnique({ where: { id: exerciseId } });

  if (!program) throw new AppError(`Program with ${programId} does not exists`, 404);
  if (!exercise) throw new AppError(`Exercise with ${exerciseId} does not exists`, 404);
  if (exercise.programId) throw new AppError(`Exercise with ${exerciseId} already has program`, 404);

  return await prisma.exercise.update({
    where: { id: exerciseId },
    data: { programId: programId },
  });
}

export async function removeExercise(programId: number, exerciseId: number) {
  const program = await prisma.program.findUnique({ where: { id: programId } });
  const exercise = await prisma.exercise.findUnique({ where: { id: exerciseId } });

  if (!program) throw new AppError(`Program with ${programId} does not exists`, 404);
  if (!exercise) throw new AppError(`Exercise with ${exerciseId} does not exists`, 404);

  return await prisma.exercise.update({
    where: { id: exerciseId },
    data: { programId: null },
  });
}
