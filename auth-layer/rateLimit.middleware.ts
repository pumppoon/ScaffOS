import { Request, Response, NextFunction } from 'express';

const rateLimitMap: Record<string, number> = {};
const MAX_REQUESTS = 100;
const WINDOW_MS = 60 * 1000;

export const rateLimit = (req: Request, res: Response, next: NextFunction) => {
    const key = req.ip;
    const currentTime = Date.now();

    if (!rateLimitMap[key]) {
        rateLimitMap[key] = 0;
    }

    rateLimitMap[key]++;

    setTimeout(() => {
        rateLimitMap[key]--;
    }, WINDOW_MS);

    if (rateLimitMap[key] > MAX_REQUESTS) {
        return res.status(429).send('Too many requests');
    }

    next();
};