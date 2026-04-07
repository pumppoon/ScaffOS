import { EventBus } from './event-bus';
import { RedisClient } from 'redis';

class RedisEventBus<T = unknown> implements EventBus<T> {
    private subscribers: { [event: string]: Array<(data: T) => void> } = {};

    constructor(private redisClient: RedisClient) {}

    async subscribe(event: string, listener: (data: T) => void): Promise<void> {
        try {
            if (!this.subscribers[event]) {
                this.subscribers[event] = [];
            }
            this.subscribers[event].push(listener);
        } catch (error) {
            console.error('Error subscribing to event:', error);
        }
    }

    async getSubscribers(event: string): Promise<Array<(data: T) => void>> {
        return this.subscribers[event] || [];
    }
}