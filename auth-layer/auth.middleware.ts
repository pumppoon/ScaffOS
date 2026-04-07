import { Request, Response, NextFunction } from 'express';
import { verifyToken } from './jwt.service';
import { createLogger, transports, format } from 'winston';

const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp(),
        format.json()
    ),
    transports: [
        new transports.Console()
    ],
});

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        logger.warn('Access denied: No token provided', { ip: req.ip });
        return res.status(401).send('Access Denied');
    }

    try {
        const verified = verifyToken(token);
        req.user = verified;
        logger.info('Token validated successfully', { ip: req.ip, user: verified });
        next();
    } catch (err) {
        logger.error('Invalid token', { ip: req.ip, error: err.message });
        res.status(400).send('Invalid Token');
    }
};