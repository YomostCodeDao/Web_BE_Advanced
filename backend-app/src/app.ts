import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import healthRoute from './routes/health.route';
import usersRoute from './routes/users.route';
import { errorHandler } from './middlewares/error.middleware';

const app = express();

// Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Swagger (tạo spec từ JSDoc)
const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: '3.0.3',
    info: { title: 'Express Postgres API', version: '1.0.0' },
    servers: [{ url: 'http://localhost:3000' }],
  },
  apis: ['src/routes/*.ts'], 
});
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, { explorer: true }));

// Routes
app.use('/api', healthRoute);
app.use('/api', usersRoute);

// Error handler
app.use(errorHandler);

export default app;
