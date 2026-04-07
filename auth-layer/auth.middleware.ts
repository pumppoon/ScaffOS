import { Request, Response, NextFunction } from 'express';
import { verifyToken } from './jwt.service';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) return res.status(401).send('Access Denied');

    try {
        const verified = verifyToken(token);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).send('Invalid Token');
    }
};