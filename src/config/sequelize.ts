/* eslint import/no-cycle: 0 */
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

import { Sequelize } from 'sequelize';

import defineExercise from '@/models/exercise';
import defineProgram from '@/models/program';

dotenv.config();

const sequelize: Sequelize = new Sequelize(process.env.DATABASE_URL, { logging: false });
sequelize.authenticate().catch((e: any) => console.error(`Unable to connect to the database${e}.`));

const modelsPath = path.join(process.cwd(), 'src', 'models');
const modelsBuilder = (instance: Sequelize) => ({
  // Import models to sequelize
  Exercise: instance.import(path.join(modelsPath, 'exercise'), defineExercise),
  Program: instance.import(path.join(modelsPath, 'program'), defineProgram),
});

const models = modelsBuilder(sequelize);

// check if every model is imported
const modelsFiles = fs.readdirSync(modelsPath);
if (Object.keys(models).length !== modelsFiles.length) {
  throw new Error('You probably forgot import database model!');
}

Object.values(models).forEach((value: any) => {
  if (value.associate) {
    value.associate(models);
  }
});

export { models, modelsBuilder, sequelize };
