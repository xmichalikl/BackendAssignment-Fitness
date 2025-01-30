import { Request, Response, NextFunction } from 'express';
import { ExerciseTrackingService } from '@/services';
import { ExerciseTrackingInsertDto, UserJwt } from '@/types';

export async function getUserExerciseTrackings(req: Request, res: Response, next: NextFunction) {
  try {
    const user = req.user as UserJwt;

    const exerciseTrackings = await ExerciseTrackingService.getUserExerciseTrackings(user.id);
    res.json({ data: exerciseTrackings, message: 'List of exercise trackings' });
  } catch (error) {
    next(error);
  }
}

export async function createExerciseTracking(req: Request, res: Response, next: NextFunction) {
  try {
    const exerciseTrackingDto: ExerciseTrackingInsertDto = req.body;
    const user = req.user as UserJwt;

    const exerciseTracking = await ExerciseTrackingService.createExerciseTracking(user.id, exerciseTrackingDto);
    res.json({ data: exerciseTracking, message: 'You have successfully created exercise tracking' });
  } catch (error) {
    next(error);
  }
}

export async function deleteExerciseTracking(req: Request, res: Response, next: NextFunction) {
  try {
    const trackingId: number = parseInt(req.params.trackingId);
    const user = req.user as UserJwt;

    const exerciseTracking = await ExerciseTrackingService.deleteExerciseTracking(user.id, trackingId);
    res.json({ data: exerciseTracking, message: 'You have successfully deleted exercise tracking' });
  } catch (error) {
    next(error);
  }
}
