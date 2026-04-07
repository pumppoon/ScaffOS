import { MessageSchema, EventTypes } from './message-schema';

class RedisEventBus implements EventBus {
    // existing code ...

    async publish<T>(event: string, data: T): Promise<void> {
        try {
            if (typeof event !== 'string' || !event.trim()) {
                throw new Error('Invalid event name.');
            }
            if (data === undefined) {
                throw new Error('Data cannot be undefined.');
            }
            const message: MessageSchema<T> = {
                eventType: event,
                payload: data,
                timestamp: Date.now(),
            };
            await this.client.publish(event, JSON.stringify(message));
            this.cache.set(event, data);
        } catch (error) {
            console.error('Error publishing event:', error);
        }
    }

    async subscribe(event: string, listener: (data: any) => void): Promise<void> {
        try {
            if (typeof event !== 'string' || !event.trim()) {
                throw new Error('Invalid event name.');
            }
            this.client.subscribe(event);
            this.client.on('message', (channel, message) => {
                if (channel === event) {
                    try {
                        const data: MessageSchema<any> = JSON.parse(message);
                        listener(data.payload);
                    } catch (parseError) {
                        console.error('Error parsing message:', parseError);
                    }
                }
            });
        } catch (error) {
            console.error('Error subscribing to event:', error);
        }
    }
}