import { Request, Response } from 'express';
import * as userService from '../services/user.service';

export const getUsers = (req: Request, res: Response) => {
  const users = userService.getAllUsers();
  res.json(users);
};

export const getUser = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const user = userService.getUserById(id);
  user ? res.json(user) : res.status(404).send('User not found');
};

export const addUser = (req: Request, res: Response) => {
  const newUser = userService.createUser(req.body);
  res.status(201).json(newUser);
};
