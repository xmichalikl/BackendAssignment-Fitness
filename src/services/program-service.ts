import { models } from '@/config/sequelize';

const { Program } = models;

export async function getAllPrograms() {
  return await Program.findAll();
}
