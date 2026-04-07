import { RedisClient } from 'redis';
import { config } from './config';

export const createRedisClient = (): RedisClient => {
    return new RedisClient({
        host: config.redisHost,
        port: config.redisPort,
    });
};
