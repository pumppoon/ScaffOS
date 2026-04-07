// Importing necessary logging library
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

const JWT_SECRET = process.env.JWT_SECRET || 'your_secret';
const JWT_EXPIRATION = '1h';

export const generateToken = (userId: string) => {
    const token = jwt.sign({ id: userId }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    logger.info('Token generated', { userId, token });
    return token;
};

export const verifyToken = (token: string) => {
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        logger.info('Token verified', { token });
        return decoded;
    } catch (error) {
        logger.error('Token verification failed', { token, error: error.message });
        throw error;
    }
};