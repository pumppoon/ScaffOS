import express from 'express';
import { registerMetrics } from './metricsService';

const router = express.Router();

router.get('/health', (req, res) => {
  res.status(200).send({ status: 'UP' });
});

router.get('/metrics', async (req, res) => {
  res.set('Content-Type', registerMetrics().contentType);
  res.end(await registerMetrics().metrics());
});

export default router;