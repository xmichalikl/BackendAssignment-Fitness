import { ExerciseTracking, Prisma } from '@prisma/client';

export type ExerciseInsertDto = Prisma.ExerciseCreateWithoutProgramInput;
export type ExerciseUpdateDto = Prisma.ExerciseUpdateWithoutProgramInput;

export type ExerciseTrackingInsertDto = Pick<ExerciseTracking, 'duration' | 'completedAt' | 'exerciseId'>;
