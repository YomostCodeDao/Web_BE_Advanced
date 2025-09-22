import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from '../entities/User';
import 'dotenv/config';

function requireEnv(name: string): string {
    const v = process.env[name];
    if (!v) {
        throw new Error(`Lỗi lấy biến: ${name}`);
    }
    return v;
}

const DB_URL = requireEnv('DATABASE_URL');

export const AppDataSource = new DataSource({
    type: 'postgres',
    url: DB_URL,              
    entities: [User],
    synchronize: true,         
    logging: false,
});
