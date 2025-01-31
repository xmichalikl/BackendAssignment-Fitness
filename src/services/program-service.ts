import { prisma } from '@/config/prisma';
import { AppError } from '@/types';

export async function getAllPrograms() {
  return await prisma.program.findMany();
}

export async function addExercise(programId: number, exerciseId: number) {
  const program = await prisma.program.findUnique({ where: { id: programId } });
  const exercise = await prisma.exercise.findUnique({ where: { id: exerciseId } });

  if (!program) throw new AppError('programs.addExercise.errors.programNotFound', 404);
  if (!exercise) throw new AppError('programs.addExercise.errors.exerciseNotFound', 404);
  if (exercise.programId) throw new AppError('programs.addExercise.errors.exerciseAssigned', 404);

  return await prisma.exercise.update({
    where: { id: exerciseId },
    data: { programId: programId },
  });
}

export async function removeExercise(programId: number, exerciseId: number) {
  const program = await prisma.program.findUnique({ where: { id: programId } });
  const exercise = await prisma.exercise.findUnique({ where: { id: exerciseId } });

  if (!program) throw new AppError('programs.addExercise.errors.programNotFound', 404);
  if (!exercise) throw new AppError('programs.addExercise.errors.exerciseNotFound', 404);

  return await prisma.exercise.update({
    where: { id: exerciseId },
    data: { programId: null },
  });
}
