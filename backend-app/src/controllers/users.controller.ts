import { Request, Response, NextFunction } from 'express';
import { createUser, listUsers } from '../services/users.service';
import { createUserSchema } from '../schemas/user.schema';

export async function getUsers(_req: Request, res: Response, next: NextFunction) {
  try {
    const users = await listUsers();
    res.json(users);
  } catch (e) { next(e); }
}

export async function postUser(req: Request, res: Response, next: NextFunction) {
  try {
    const parsed = createUserSchema.parse(req.body);
    const user = await createUser(parsed);
    res.status(201).json(user);
  } catch (e: any) {
    if (e.name === 'ZodError') {
      e.status = 400; e.details = e.issues;
    }
    next(e);
  }
}
