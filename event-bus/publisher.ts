import redisClient from './redisClient';
import { Message } from './messageSchema';

export const publish = async <T>(message: Message<T>): Promise<void> => {
    const { topic, data } = message;
    // Validate input structure
    if (!topic || typeof topic !== 'string') {
        throw new Error('Invalid topic');
    }
    if (!data) {
        throw new Error('Invalid data');
    }
    try {
        await redisClient.publish(topic, JSON.stringify(data));
    } catch (error) {
        console.error('Error publishing message', error);
        throw new Error('Failed to publish message');
    }
};