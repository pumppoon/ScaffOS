import { RedisClient } from 'redis';

export const createRedisClient = (): RedisClient => {
    return new RedisClient({
        host: 'localhost',
        port: 6379,
    });
};
