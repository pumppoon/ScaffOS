import { createLogger, transports, format } from 'winston';
import jwt from 'jsonwebtoken';

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

const JWT_SECRET = process.env.JWT_SECRET || 'your_secret';
const JWT_EXPIRATION = '1h';

export const generateToken = (userId: string): string => {
    const token = jwt.sign({ id: userId }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    loggerTokenAction('generated', userId, token);
    return token;
};

export const verifyToken = (token: string): any => {
    const start = Date.now();
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        loggerTokenAction('verified', null, token, start);
        return decoded;
    } catch (error) {
        logger.error('Token verification failed', { token, error: error.message });
        throw error;
    }
};

const loggerTokenAction = (action: string, userId: string | null, token: string, startTime?: number) => {
    const duration = startTime ? Date.now() - startTime : undefined;
    logger.info(`Token ${action}`, { userId, token, duration });
};