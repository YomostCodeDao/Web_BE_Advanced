import { Request, Response, NextFunction } from 'express';
import { AuthService } from './auth.service';
import { env } from '../../config/env';

const service = new AuthService();

function setRefreshCookie(res: Response, token: string) {
    res.cookie('refresh_token', token, {
        httpOnly: true,
        secure: env.COOKIE_SECURE,
        sameSite: 'lax',
        path: '/api/auth/refresh',
    });
}

export class AuthController {
    static async register(req: Request, res: Response, next: NextFunction) {
        try {
            const { email, password, name } = req.body;
            const { accessToken, refreshToken, user } = await service.register(email, password, name);
            setRefreshCookie(res, refreshToken);
            res.status(201).json({ accessToken, user });
        } catch (e: any) {
            next({ status: 400, message: e.message });
        }
    }

    static async login(req: Request, res: Response, next: NextFunction) {
        try {
            const { email, password } = req.body;
            const { accessToken, refreshToken, user } = await service.login(email, password);
            setRefreshCookie(res, refreshToken);
            res.json({ accessToken, user });
        } catch (e: any) {
            next({ status: 401, message: e.message });
        }
    }

    static async refresh(req: Request, res: Response, next: NextFunction) {
        try {
            const token = (req as any).cookies?.refresh_token || req.cookies?.refresh_token;
            if (!token) return res.status(401).json({ error: { message: 'No refresh token' } });
            const { accessToken, refreshToken, user } = await service.refresh(token);
            setRefreshCookie(res, refreshToken);
            res.json({ accessToken, user });
        } catch (e: any) {
            next({ status: 401, message: e.message });
        }
    }

    static async logout(req: Request, res: Response, next: NextFunction) {
        try {
            const userId = (req as any).user?.id;
            if (userId) await service.logout(userId);
            res.clearCookie('refresh_token', { path: '/api/auth/refresh' });
            res.status(204).send();
        } catch (e) { next(e); }
    }

    static async me(req: Request, res: Response) {
        res.json({ user: (req as any).user });
    }
}
