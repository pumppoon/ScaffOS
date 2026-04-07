import redisClient from './redisClient';
import { Message } from './messageSchema';

export const publish = async <T>(message: Message<T>): Promise<void> => {
    const { topic, data } = message;
    await redisClient.publish(topic, JSON.stringify(data));
};