import pino from 'pino';

const logger = pino({
  level: process.env.LOG_LEVEL || 'info',
  transport: {
    target: 'pino-pretty'
  }
});

export const logRequest = (reqId: string, method: string, url: string) => {
  logger.info({ reqId, method, url }, 'Request received');
};

export const logResponse = (reqId: string, method: string, url: string, duration: number) => {
  logger.info({ reqId, method, url, duration }, 'Response sent');
};

export const logError = (reqId: string, error: Error) => {
  logger.error({ reqId, message: error.message, stack: error.stack }, 'Error occurred');
};
