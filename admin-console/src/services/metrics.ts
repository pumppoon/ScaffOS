import express from 'express';
import { collectDefaultMetrics, register, Counter } from 'prom-client';
import { v4 as uuidv4 } from 'uuid';

const metricsRouter = express.Router();

// Enable default metrics collection
collectDefaultMetrics();

// Health check endpoint
metricsRouter.get('/health', (req, res) => {
    const traceId = uuidv4();
    console.log(`Health check requested - Trace ID: ${traceId}`);
    res.status(200).send({ status: 'UP', traceId });
});

// Metrics endpoint
metricsRouter.get('/metrics', async (req, res) => {
    try {
        res.set('Content-Type', register.contentType);
        res.end(await register.metrics());
    } catch (ex) {
        res.status(500).end(ex);
    }
});

export default metricsRouter;