import http from 'http';
import express from 'express';

import { sequelize } from '@/config/sequelize';

import ProgramRouter from '@/routes/programs';
import ExerciseRouter from '@/routes/exercises';

// Config
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use('/programs', ProgramRouter());
app.use('/exercises', ExerciseRouter());

// HTTP server
const httpServer = http.createServer(app);

// Sync database
sequelize.sync();
console.log('Sync database', 'postgresql://localhost:5432/fitness_app');

// Server start
httpServer.listen(8000).on('listening', () => console.log(`Server started at port ${8000}`));

export default httpServer;
