// src/db/data-source.ts
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { env } from '../config/env';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { User } from '../modules/users/user.entity';
import { RefreshToken } from '../modules/auth/refresh_token.entity';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: env.DB_HOST,     // ví dụ: 'localhost'
    port: env.DB_PORT,     // ví dụ: 5432
    username: env.DB_USER, // 'trello'
    password: env.DB_PASS, // 'trello'
    database: env.DB_NAME, // 'trello_clone'

    // 🔴 QUAN TRỌNG: TẮT SSL HOÀN TOÀN CHO LOCAL
    ssl: false,

    entities: [User, RefreshToken],
    migrations: ['dist/db/migrations/*.js'],
    synchronize: false,
    logging: env.NODE_ENV !== 'production',
    namingStrategy: new SnakeNamingStrategy(),
});
