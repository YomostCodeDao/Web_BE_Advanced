import { Router } from 'express';
import { getUsers, postUser } from '../controllers/users.controller';

/**
 * @openapi
 * tags:
 *   - name: Users
 *     description: User management
 */
const router = Router();

/**
 * @openapi
 * /api/users:
 *   get:
 *     summary: List users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Array of users
 */
router.get('/users', getUsers);

/**
 * @openapi
 * /api/users:
 *   post:
 *     summary: Create user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email, name]
 *             properties:
 *               email: { type: string, format: email }
 *               name: { type: string }
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Validation error
 */
router.post('/users', postUser);

export default router;
