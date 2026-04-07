import { Counter, Histogram } from 'prom-client';

// Initialize a counter for total HTTP requests
const requestCounter = new Counter({
    name: 'http_requests_total',
    help: 'Total number of HTTP requests',
    labelNames: ['method', 'route'],
});

// Initialize a histogram for request duration
const latencyHistogram = new Histogram({
    name: 'http_request_duration_seconds',
    help: 'Histogram of HTTP request duration in seconds',
    labelNames: ['method', 'route'],
});

/**
 * Tracks an HTTP request's method, route, and duration.
 * @param method - HTTP method of the request.
 * @param route - Route that was requested.
 * @param duration - Duration of the request in milliseconds.
 */
export const trackRequest = (method: string, route: string, duration: number) => {
    requestCounter.inc({ method, route });
    latencyHistogram.observe(duration / 1000);
};

/**
 * Gets the total count of HTTP requests.
 * @returns Total count of HTTP requests.
 */
export const getTotalRequestCount = (): number => {
    return requestCounter.get().values.reduce((acc, val) => acc + val.values[0].value, 0);
};

/**
 * Metrics endpoint handler.
 * Responds with the metrics data in Prometheus format.
 * @param req - Express request object.
 * @param res - Express response object.
 */
export const getMetrics = async (req, res) => {
    res.set('Content-Type', prometheus.register.contentType);
    res.end(await prometheus.register.metrics());
};