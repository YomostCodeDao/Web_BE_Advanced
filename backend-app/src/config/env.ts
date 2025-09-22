import 'dotenv/config';

export const env = {
  port: parseInt(process.env.PORT || '3000', 10),
  nodeEnv: process.env.NODE_ENV || 'development',
  databaseUrl: process.env.DATABASE_URL!,
};

if (!env.databaseUrl) {
  throw new Error('DATABASE_URL is missing in .env');
}
