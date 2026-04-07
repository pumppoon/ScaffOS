# Monitoring Service

## Overview
This service provides health checks, latency tracking, and uptime monitoring for the application.

## Setup Instructions
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Create a `.env` file in the root directory and set the following environment variables:
   - `PORT`: The port the service will run on (default is 3000).
   - `METRICS_ENABLED`: Set to 'true' to enable metrics endpoint.
4. Run the service using `npm start`.

## API Endpoints
- **GET /health**: Returns the health status of the service including uptime and total requests.
- **GET /metrics**: Returns metrics data (if enabled).

## Event Monitoring
The service listens for health check events to enable proactive monitoring.