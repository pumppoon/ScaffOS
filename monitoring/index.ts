import express from 'express';
import { healthCheck } from './healthCheck';
import { latencyTracker } from './latencyTracker';
import monitorEvents from './eventListener';
import { getMetrics } from './metrics';

const app = express();

app.use(latencyTracker);
app.get('/health', healthCheck);
app.get('/metrics', getMetrics);

monitorEvents();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Monitoring service running on port ${PORT}`);
});
