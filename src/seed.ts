import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function seedDB() {
  try {
    await prisma.exercise.deleteMany();
    await prisma.program.deleteMany();

    await prisma.program.createMany({
      data: [{ name: 'Program 1' }, { name: 'Program 2' }, { name: 'Program 3' }],
    });

    await prisma.exercise.createMany({
      data: [
        { name: 'Exercise 1', difficulty: 'EASY', programId: 1 },
        { name: 'Exercise 2', difficulty: 'EASY', programId: 2 },
        { name: 'Exercise 3', difficulty: 'MEDIUM', programId: 1 },
        { name: 'Exercise 4', difficulty: 'MEDIUM', programId: 2 },
        { name: 'Exercise 5', difficulty: 'HARD', programId: 1 },
        { name: 'Exercise 6', difficulty: 'HARD', programId: 2 },
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
