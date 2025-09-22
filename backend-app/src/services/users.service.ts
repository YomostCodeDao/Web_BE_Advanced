import { prisma } from '../db/prisma';
import { CreateUserInput } from '../schemas/user.schema';

export async function listUsers() {
  return prisma.user.findMany({ orderBy: { createdAt: 'desc' } });
}

export async function createUser(data: CreateUserInput) {
  return prisma.user.create({ data });
}
