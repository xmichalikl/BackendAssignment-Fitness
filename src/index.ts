import http from 'http';
import express from 'express';

import { AuthRouter, ExerciseRouter, ProgramRouter } from '@/routes';
import { ErrorMiddleware } from '@/middlewares';

// Config
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use('/auth', AuthRouter);
app.use('/programs', ProgramRouter);
app.use('/exercises', ExerciseRouter);

// Middlewares
app.use(ErrorMiddleware.errorHandlerMiddleware);

// HTTP server
const httpServer = http.createServer(app);

// Server start
httpServer.listen(8000).on('listening', () => console.log(`Server started at port ${8000}`));

export default httpServer;
