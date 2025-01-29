import { models } from '@/config/sequelize';

const { Exercise, Program } = models;

export async function getAllExercises() {
  return await Exercise.findAll({
    include: [{ model: Program, as: 'program' }],
  });
}
