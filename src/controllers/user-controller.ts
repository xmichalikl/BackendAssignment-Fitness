import { UserService } from '@/services';
import { AppError, UserJwt, UserUpdateDto } from '@/types';
import { Request, Response, NextFunction } from 'express';

export async function getAllUsers(req: Request, res: Response, next: NextFunction) {
  try {
    const users = await UserService.getAllUsers();
    res.json({ data: users, message: 'List of users' });
  } catch (error) {
    next(error);
  }
}

export async function getUser(req: Request, res: Response, next: NextFunction) {
  try {
    const userId: number = parseInt(req.params.userId);
    const userJwt = req.user as UserJwt;

    // if (userJwt.id !== userId) throw new AppError('Unauthorized Access', 401);

    const user = await UserService.getUser(userId);
    res.json({ data: user, message: 'User details' });
  } catch (error) {
    next(error);
  }
}

export async function updateUser(req: Request, res: Response, next: NextFunction) {
  try {
    const userId: number = parseInt(req.params.userId);
    const userDto: UserUpdateDto = req.body;

    const user = await UserService.updateUser(userId, userDto);
    res.json({ data: user, message: 'You have successfully updated user' });
  } catch (error) {
    next(error);
  }
}

export async function getAllUserProfiles(req: Request, res: Response, next: NextFunction) {
  try {
    const profiles = await UserService.getAllUserProfiles();
    res.json({ data: profiles, message: 'List of user profiles' });
  } catch (error) {
    next(error);
  }
}

export async function getUserProfile(req: Request, res: Response, next: NextFunction) {
  try {
    const userId: number = parseInt(req.params.userId);

    const profile = await UserService.getUserProfile(userId);
    res.json({ data: profile, message: 'User profile' });
  } catch (error) {
    next(error);
  }
}
