import { AppDataSource } from '../db/data-source';
import { User } from '../entities/User';

export async function listUsers() {
  const repo = AppDataSource.getRepository(User);
  return repo.find({ order: { createdAt: 'DESC' } });
}

export async function createUser(data: { email: string; name: string }) {
  const repo = AppDataSource.getRepository(User);
  const user = repo.create(data);
  return repo.save(user);
}
