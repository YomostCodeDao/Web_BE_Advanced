import { Router } from 'express';
import cookieParser from 'cookie-parser';
import { validate } from '../../common/middlewares/validate.middleware';
import { RegisterDto, LoginDto } from './auth.dto';
import { AuthController } from './auth.controller';
import { authGuard } from '../../common/middlewares/auth.guard';
import { loginLimiter, registerLimiter } from '../../config/rate-limit';

export const authRouter = Router();
authRouter.use(cookieParser());

// src/modules/auth/auth.routes.ts
/**
 * /**
 * @openapi
 * /auth/register:
 *   post:
 *     tags: [Auth]
 *     summary: Register
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object           # editor sẽ hiện, bạn tự gõ JSON
 *             additionalProperties: true
 *     responses:
 *       201:
 *         description: Created
 */

/**
 * @openapi
 * /auth/login:
 *   post:
 *     tags: [Auth]
 *     summary: Login
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             additionalProperties: true
 *     responses:
 *       200:
 *         description: OK
 */

/**
 * @openapi
 * /auth/refresh:
 *   post:
 *     tags: [Auth]
 *     summary: Refresh access token (via httpOnly cookie)
 *     responses:
 *       200:
 *         description: OK
 */

/**
 * @openapi
 * /auth/logout:
 *   post:
 *     tags: [Auth]
 *     summary: Logout & revoke refresh tokens
 *     responses:
 *       204:
 *         description: No Content
 */

/**
 * @openapi
 * /auth/me:
 *   get:
 *     tags: [Auth]
 *     summary: Current user
 *     security: [{ bearerAuth: [] }]
 *     responses:
 *       200:
 *         description: OK
 */
