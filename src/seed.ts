import { EXERCISE_DIFFICULTY, PrismaClient, USER_ROLE } from '@prisma/client';
import { generateHashedPassword } from './utils';
const prisma = new PrismaClient();

async function seedDB() {
  try {
    await prisma.user.deleteMany();
    await prisma.program.deleteMany();
    await prisma.exercise.deleteMany();
    await prisma.exerciseTracking.deleteMany();

    await prisma.user.createMany({
      data: [
        {
          id: 1,
          name: 'John',
          surname: 'Doe',
          nickName: 'JohnD',
          age: 30,
          email: 'johndoe@example.com',
          password: await generateHashedPassword('password123'),
          role: USER_ROLE.ADMIN,
        },
        {
          id: 2,
          name: 'Jane',
          surname: 'Smith',
          nickName: 'JaneS',
          age: 25,
          email: 'janesmith@example.com',
          password: await generateHashedPassword('password123'),
          role: USER_ROLE.USER,
        },
        {
          id: 3,
          name: 'Alex',
          surname: 'Brown',
          nickName: 'AlexB',
          age: 28,
          email: 'alexbrown@example.com',
          password: await generateHashedPassword('password123'),
          role: USER_ROLE.USER,
        },
      ],
    });

    await prisma.program.createMany({
      data: [
        { id: 1, name: 'Program 1' },
        { id: 2, name: 'Program 2' },
        { id: 3, name: 'Program 3' },
        { id: 4, name: 'Program 3' },
        { id: 5, name: 'Program 3' },
      ],
    });

    await prisma.exercise.createMany({
      data: [
        { id: 1, name: 'Exercise 1', difficulty: EXERCISE_DIFFICULTY.MEDIUM, programId: 1 },
        { id: 2, name: 'Exercise 2', difficulty: EXERCISE_DIFFICULTY.HARD, programId: 2 },
        { id: 3, name: 'Exercise 3', difficulty: EXERCISE_DIFFICULTY.HARD, programId: 3 },
        { id: 4, name: 'Exercise 4', difficulty: EXERCISE_DIFFICULTY.MEDIUM, programId: 4 },
        { id: 5, name: 'Exercise 5', difficulty: EXERCISE_DIFFICULTY.HARD, programId: 5 },
        { id: 6, name: 'Exercise 6', difficulty: EXERCISE_DIFFICULTY.EASY, programId: 1 },
        { id: 7, name: 'Exercise 7', difficulty: EXERCISE_DIFFICULTY.EASY, programId: 2 },
        { id: 8, name: 'Exercise 8', difficulty: EXERCISE_DIFFICULTY.HARD, programId: 3 },
        { id: 9, name: 'Exercise 9', difficulty: EXERCISE_DIFFICULTY.EASY, programId: 4 },
        { id: 10, name: 'Exercise 10', difficulty: EXERCISE_DIFFICULTY.EASY, programId: 5 },
        { id: 11, name: 'Exercise 11', difficulty: EXERCISE_DIFFICULTY.MEDIUM, programId: 1 },
        { id: 12, name: 'Exercise 12', difficulty: EXERCISE_DIFFICULTY.EASY, programId: 2 },
        { id: 13, name: 'Exercise 13', difficulty: EXERCISE_DIFFICULTY.MEDIUM, programId: 3 },
        { id: 14, name: 'Exercise 14', difficulty: EXERCISE_DIFFICULTY.MEDIUM, programId: 4 },
        { id: 15, name: 'Exercise 15', difficulty: EXERCISE_DIFFICULTY.EASY, programId: 5 },
        { id: 16, name: 'Exercise 16', difficulty: EXERCISE_DIFFICULTY.EASY, programId: 1 },
        { id: 17, name: 'Exercise 17', difficulty: EXERCISE_DIFFICULTY.MEDIUM, programId: 2 },
        { id: 18, name: 'Exercise 18', difficulty: EXERCISE_DIFFICULTY.HARD, programId: 3 },
        { id: 19, name: 'Exercise 19', difficulty: EXERCISE_DIFFICULTY.EASY, programId: 4 },
        { id: 20, name: 'Exercise 20', difficulty: EXERCISE_DIFFICULTY.MEDIUM, programId: 5 },
        { id: 21, name: 'Exercise 21', difficulty: EXERCISE_DIFFICULTY.EASY, programId: 1 },
        { id: 22, name: 'Exercise 22', difficulty: EXERCISE_DIFFICULTY.EASY, programId: 2 },
        { id: 23, name: 'Exercise 23', difficulty: EXERCISE_DIFFICULTY.HARD, programId: 3 },
        { id: 24, name: 'Exercise 24', difficulty: EXERCISE_DIFFICULTY.MEDIUM, programId: 4 },
        { id: 25, name: 'Exercise 25', difficulty: EXERCISE_DIFFICULTY.MEDIUM, programId: 5 },
        { id: 26, name: 'Exercise 26', difficulty: EXERCISE_DIFFICULTY.MEDIUM, programId: 1 },
        { id: 27, name: 'Exercise 27', difficulty: EXERCISE_DIFFICULTY.HARD, programId: 2 },
        { id: 28, name: 'Exercise 28', difficulty: EXERCISE_DIFFICULTY.HARD, programId: 3 },
        { id: 29, name: 'Exercise 29', difficulty: EXERCISE_DIFFICULTY.EASY, programId: 4 },
        { id: 30, name: 'Exercise 30', difficulty: EXERCISE_DIFFICULTY.EASY, programId: 5 },
      ],
    });

    await prisma.exerciseTracking.createMany({
      data: [
        { duration: 57, completedAt: '2025-01-20T14:36:56.002619Z', userId: 2, exerciseId: 12 },
        { duration: 30, completedAt: '2025-01-06T23:36:56.002640Z', userId: 1, exerciseId: 7 },
        { duration: 43, completedAt: '2025-01-24T00:36:56.002650Z', userId: 3, exerciseId: 15 },
        { duration: 21, completedAt: '2025-01-05T21:36:56.002661Z', userId: 3, exerciseId: 12 },
        { duration: 34, completedAt: '2025-01-04T23:36:56.002671Z', userId: 3, exerciseId: 20 },
        { duration: 58, completedAt: '2025-01-21T21:36:56.002680Z', userId: 3, exerciseId: 28 },
        { duration: 34, completedAt: '2025-01-14T21:36:56.002686Z', userId: 2, exerciseId: 3 },
        { duration: 46, completedAt: '2025-01-10T12:36:56.002694Z', userId: 1, exerciseId: 18 },
        { duration: 49, completedAt: '2025-01-11T23:36:56.002701Z', userId: 2, exerciseId: 19 },
        { duration: 44, completedAt: '2025-01-06T18:36:56.002707Z', userId: 3, exerciseId: 15 },
        { duration: 55, completedAt: '2025-01-15T15:36:56.002713Z', userId: 2, exerciseId: 4 },
        { duration: 49, completedAt: '2025-01-01T17:36:56.002718Z', userId: 1, exerciseId: 23 },
        { duration: 33, completedAt: '2024-12-31T19:36:56.002724Z', userId: 2, exerciseId: 28 },
        { duration: 39, completedAt: '2025-01-07T19:36:56.002733Z', userId: 3, exerciseId: 4 },
        { duration: 36, completedAt: '2025-01-24T18:36:56.002742Z', userId: 2, exerciseId: 5 },
        { duration: 42, completedAt: '2025-01-18T14:36:56.002750Z', userId: 1, exerciseId: 19 },
        { duration: 57, completedAt: '2025-01-20T19:36:56.002759Z', userId: 2, exerciseId: 30 },
        { duration: 21, completedAt: '2025-01-15T00:36:56.002768Z', userId: 1, exerciseId: 13 },
        { duration: 42, completedAt: '2025-01-09T19:36:56.002774Z', userId: 2, exerciseId: 5 },
        { duration: 56, completedAt: '2025-01-24T00:36:56.002780Z', userId: 3, exerciseId: 16 },
        { duration: 54, completedAt: '2025-01-05T19:36:56.002785Z', userId: 2, exerciseId: 14 },
        { duration: 55, completedAt: '2025-01-02T19:36:56.002790Z', userId: 2, exerciseId: 1 },
        { duration: 23, completedAt: '2024-12-31T13:36:56.002796Z', userId: 3, exerciseId: 24 },
        { duration: 31, completedAt: '2025-01-15T16:36:56.002801Z', userId: 2, exerciseId: 27 },
        { duration: 21, completedAt: '2025-01-18T20:36:56.002807Z', userId: 2, exerciseId: 4 },
        { duration: 46, completedAt: '2025-01-08T16:36:56.002813Z', userId: 3, exerciseId: 25 },
        { duration: 24, completedAt: '2025-01-10T23:36:56.002820Z', userId: 1, exerciseId: 29 },
        { duration: 53, completedAt: '2025-01-20T15:36:56.002829Z', userId: 2, exerciseId: 1 },
        { duration: 39, completedAt: '2025-01-24T23:36:56.002838Z', userId: 3, exerciseId: 19 },
        { duration: 50, completedAt: '2025-01-16T22:36:56.002847Z', userId: 3, exerciseId: 9 },
        { duration: 23, completedAt: '2025-01-17T18:36:56.002854Z', userId: 2, exerciseId: 10 },
        { duration: 38, completedAt: '2025-01-14T16:36:56.002859Z', userId: 3, exerciseId: 22 },
        { duration: 40, completedAt: '2025-01-14T22:36:56.002865Z', userId: 1, exerciseId: 27 },
        { duration: 45, completedAt: '2025-01-10T13:36:56.002871Z', userId: 2, exerciseId: 19 },
        { duration: 57, completedAt: '2025-01-05T19:36:56.002877Z', userId: 3, exerciseId: 8 },
        { duration: 26, completedAt: '2025-01-04T13:36:56.002883Z', userId: 3, exerciseId: 12 },
        { duration: 57, completedAt: '2025-01-13T17:36:56.002891Z', userId: 1, exerciseId: 30 },
        { duration: 42, completedAt: '2025-01-04T12:36:56.002900Z', userId: 3, exerciseId: 17 },
        { duration: 39, completedAt: '2025-01-02T16:36:56.002909Z', userId: 2, exerciseId: 24 },
        { duration: 34, completedAt: '2025-01-21T00:36:56.002916Z', userId: 2, exerciseId: 1 },
        { duration: 57, completedAt: '2025-01-20T13:36:56.002933Z', userId: 3, exerciseId: 17 },
        { duration: 56, completedAt: '2025-01-24T23:36:56.002940Z', userId: 1, exerciseId: 4 },
        { duration: 52, completedAt: '2025-01-01T14:36:56.002945Z', userId: 3, exerciseId: 1 },
        { duration: 51, completedAt: '2025-01-09T12:36:56.002950Z', userId: 2, exerciseId: 1 },
        { duration: 22, completedAt: '2025-01-06T23:36:56.002956Z', userId: 2, exerciseId: 5 },
        { duration: 46, completedAt: '2025-01-03T21:36:56.002961Z', userId: 1, exerciseId: 21 },
        { duration: 35, completedAt: '2025-01-30T12:36:56.002967Z', userId: 3, exerciseId: 28 },
        { duration: 29, completedAt: '2025-01-20T00:36:56.002972Z', userId: 2, exerciseId: 8 },
        { duration: 58, completedAt: '2025-01-12T14:36:56.002978Z', userId: 2, exerciseId: 24 },
        { duration: 34, completedAt: '2025-01-02T23:36:56.002983Z', userId: 3, exerciseId: 4 },
      ],
    });

    console.log('DB seed done');
  } catch (error) {
    console.error('Error in seeding:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seedDB();
