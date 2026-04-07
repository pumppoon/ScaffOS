import { Request, Response } from 'express';
import { getServiceHealthStatus } from './healthStatusHelper';

/**
 * Health check endpoint.
 * @param req - Express request object.
 * @param res - Express response object.
 */
export const healthCheck = (req: Request, res: Response): void => {
    const healthStatus = getServiceHealthStatus();
    res.status(200).json(healthStatus);
};

// healthStatusHelper.ts
export const getServiceHealthStatus = () => ({
    status: 'UP',
    uptime: getUptime(),
    totalRequests: getTotalRequestCount(),
});