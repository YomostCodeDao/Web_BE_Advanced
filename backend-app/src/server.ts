import app from './app';
import { env } from './config/env';
import { connectDb } from './db/prisma';

async function bootstrap() {
  await connectDb();
  app.listen(env.port, () => {
    console.log("===============")
    console.log(`Server listening on: http://localhost:${env.port}`);
    console.log(`Swagger UI at      : http://localhost:${env.port}/docs`);
  });
}

bootstrap().catch((e) => {
  console.error('Fatal error:', e);
  process.exit(1);
});
