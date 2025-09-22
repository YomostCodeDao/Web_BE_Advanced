import { Request, Response } from 'express';

export async function healthCheck(_req: Request, res: Response) {
  res.json({ ok: true, service: 'express-postgres', ts: new Date().toISOString() });
}
