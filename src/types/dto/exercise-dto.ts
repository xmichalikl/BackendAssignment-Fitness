import { Prisma } from '@prisma/client';

export type ExerciseInsertDto = Prisma.ExerciseCreateWithoutProgramInput;
export type ExerciseUpdateDto = Prisma.ExerciseUpdateWithoutProgramInput;
