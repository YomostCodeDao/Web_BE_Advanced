import { Router } from 'express';
import { healthCheck } from '../controllers/health.controller';

const router = Router();

/**
 * @openapi
 * /api/health:
 *   get:
 *     summary: Health check
 *     tags: [Health]
 *     responses:
 *       200:
 *         description: Service alive
 */
router.get('/health', healthCheck);

export default router;
