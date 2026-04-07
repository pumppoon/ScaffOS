import { Request, Response } from 'express';import { getUptime } from './uptimeTracker';import { getTotalRequestCount } from './metrics';

/**
 * Health check endpoint.
 * Responds with the current health status, uptime, and total request count.
 * @param req - Express request object.
 * @param res - Express response object.
 */
export const healthCheck = (req: Request, res: Response): void => {
    const healthStatus = {
        status: 'UP',
        uptime: getUptime(),
        totalRequests: getTotalRequestCount(),
    };
    res.status(200).json(healthStatus);
};