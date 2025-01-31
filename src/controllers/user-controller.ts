import { UserService } from '@/services';
import { UserJwt, UserUpdateDto } from '@/types';
import { Request, Response, NextFunction } from 'express';

export async function getAllUsers(req: Request, res: Response, next: NextFunction) {
  try {
    const users = await UserService.getAllUsers();
    res.json({ data: users, message: req.__('users.getAllUsers.success') });
  } catch (error) {
    next(error);
  }
}

export async function getUser(req: Request, res: Response, next: NextFunction) {
  try {
    const userId: number = parseInt(req.params.userId);

    const user = await UserService.getUser(userId);
    res.json({ data: user, message: req.__('users.getUser.success') });
  } catch (error) {
    next(error);
  }
}

export async function updateUser(req: Request, res: Response, next: NextFunction) {
  try {
    const userId: number = parseInt(req.params.userId);
    const userDto: UserUpdateDto = req.body;

    const user = await UserService.updateUser(userId, userDto);
    res.json({ data: user, message: req.__('users.updateUser.success') });
  } catch (error) {
    next(error);
  }
}

export async function getAllUserProfiles(req: Request, res: Response, next: NextFunction) {
  try {
    const profiles = await UserService.getAllUserProfiles();
    res.json({ data: profiles, message: req.__('users.getAllUserProfiles.success') });
  } catch (error) {
    next(error);
  }
}

export async function getUserProfile(req: Request, res: Response, next: NextFunction) {
  try {
    const user = req.user as UserJwt;

    const profile = await UserService.getUserProfile(user.id);
    res.json({ data: profile, message: req.__('users.getUserProfile.success') });
  } catch (error) {
    next(error);
  }
}
