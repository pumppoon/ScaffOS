import express from 'express';
import { healthCheck } from './healthCheck';
import { latencyTracker } from './latencyTracker';
import monitorEvents from './eventListener';

const app = express();

app.use(latencyTracker);
app.get('/health', healthCheck);

monitorEvents();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Monitoring service running on port ${PORT}`);
});