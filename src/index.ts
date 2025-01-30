import http from 'http';
import express from 'express';

import { AuthRoutes, ExerciseRoutes, ProgramRoutes, UserRoutes } from '@/routes';
import { ErrorMiddleware } from '@/middlewares';
import { passport } from '@/config/passport';

// Config
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());

// Routes
app.use('/auth', AuthRoutes);
app.use('/users', UserRoutes);
app.use('/programs', ProgramRoutes);
app.use('/exercises', ExerciseRoutes);

// Middlewares
app.use(ErrorMiddleware);

// HTTP server
const httpServer = http.createServer(app);

// Server start
httpServer.listen(8000).on('listening', () => console.log(`Server started at port ${8000}`));

export default httpServer;
