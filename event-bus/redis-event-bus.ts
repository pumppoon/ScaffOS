import { RedisClient } from 'redis';
import { EventBus } from './event-bus';

export class RedisEventBus implements EventBus {
    private client: RedisClient;

    constructor(redisClient: RedisClient) {
        this.client = redisClient;
    }

    async publish(event: string, data: any): Promise<void> {
        return new Promise((resolve, reject) => {
            this.client.publish(event, JSON.stringify(data), (err, reply) => {
                if (err) return reject(err);
                resolve();
            });
        });
    }

    async subscribe(event: string, listener: (data: any) => void): Promise<void> {
        return new Promise((resolve, reject) => {
            this.client.subscribe(event);
            this.client.on('message', (channel, message) => {
                if (channel === event) {
                    listener(JSON.parse(message));
                }
            });
            resolve();
        });
    }
}
