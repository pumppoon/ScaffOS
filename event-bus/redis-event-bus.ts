import { RedisClient } from 'redis';
import { EventBus } from './event-bus';

/**
 * Implementation of EventBus using Redis for pub/sub mechanisms with caching.
 */
export class RedisEventBus implements EventBus {
    private client: RedisClient;
    private cache: Map<string, any> = new Map();

    constructor(redisClient: RedisClient) {
        this.client = redisClient;
    }

    async publish(event: string, data: any): Promise<void> {
        this.cache.set(event, data); // Cache data before publishing
        return new Promise((resolve, reject) => {
            this.client.publish(event, JSON.stringify(data), (err, reply) => {
                if (err) return reject(err);
                resolve();
            });
        });
    }

    async subscribe(event: string, listener: (data: any) => void): Promise<void> {
        if (this.cache.has(event)) { // Fetch from cache if available
            listener(this.cache.get(event));
        }
        return new Promise((resolve, reject) => {
            this.client.subscribe(event);
            this.client.on('message', (channel, message) => {
                if (channel === event) {
                    const parsedData = JSON.parse(message);
                    this.cache.set(event, parsedData); // Update cache on message
                    listener(parsedData);
                }
            });
            resolve();
        });
    }
}