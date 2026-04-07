import { Request, Response } from 'express';
import { uptimeTracker } from './uptimeTracker';
import { requestCounter } from './metrics';

export const healthCheck = (req: Request, res: Response): void => {
    const uptime = uptimeTracker.getUptime();
    const totalRequests = requestCounter.get().values.reduce((acc, val) => acc + val.values[0].value, 0);

    res.status(200).json({
        status: 'UP',
        uptime,
        totalRequests,
    });
};
