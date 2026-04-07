import express from 'express';
import { healthCheck } from './healthCheck';
import { latencyTracker } from './latencyTracker';
import monitorEvents from './eventListener';
import { getMetrics } from './metrics';
import config from './config';

const app = express();

app.use(latencyTracker);
app.get('/health', healthCheck);
if (config.METRICS_ENABLED) {
    app.get('/metrics', getMetrics);
}

monitorEvents();

app.listen(config.PORT, () => {
    console.log(`Monitoring service running on port ${config.PORT}`);
});