import 'reflect-metadata'; 
import app from './app';
import { env } from './config/env';
import { AppDataSource } from './db/data-source';

async function bootstrap() {
  await AppDataSource.initialize();
  console.log('Connected to PostgreSQL via TypeORM');

  app.listen(env.port, () => {
    console.log(`Server listening on http://localhost:${env.port}`);
    console.log(`Swagger UI at       http://localhost:${env.port}/docs`);
  });
}

bootstrap().catch((e) => {
  console.error('Fatal error:', e);
  process.exit(1);
});
