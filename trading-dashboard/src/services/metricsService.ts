import promClient from 'prom-client';

const collectDefaultMetrics = promClient.collectDefaultMetrics;
collectDefaultMetrics();

const metrics = {
  apiRequests: new promClient.Counter({
    name: 'api_requests_total',
    help: 'Total number of API requests',
  }),
  latency: new promClient.Histogram({
    name: 'api_request_duration_seconds',
    help: 'API request duration in seconds',
    buckets: [0.1, 0.5, 1, 2, 5],
  }),
};

export const registerMetrics = () => {
  return promClient.register;
};

export const recordApiRequest = (duration: number) => {
  metrics.apiRequests.inc();
  metrics.latency.observe(duration);
};
