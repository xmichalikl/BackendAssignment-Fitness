import { prisma } from '@/config/prisma';
import { ExerciseTrackingInsertDto } from '@/types';

export async function getUserExerciseTrackings(userId: number) {
  return await prisma.exerciseTracking.findMany({
    where: { userId: userId },
    select: { duration: true, completedAt: true },
  });
}

export async function createExerciseTracking(userId: number, exercisetrackingDto: ExerciseTrackingInsertDto) {
  return await prisma.exerciseTracking.create({
    data: { ...exercisetrackingDto, userId: userId },
  });
}

export async function deleteExerciseTracking(userId: number, exerciseTrackingId: number) {
  return await prisma.exerciseTracking.delete({
    where: { id: exerciseTrackingId, userId: userId },
  });
}
