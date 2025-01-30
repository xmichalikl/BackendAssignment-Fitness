import { UserService } from '@/services';
import { UserUpdateDto } from '@/types';
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
