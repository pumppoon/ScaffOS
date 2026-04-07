import redisClient from './redisClient';
import { Message } from './messageSchema';

type MessageHandler<T> = (message: Message<T>) => void;

export const subscribe = <T>(topic: string, handler: MessageHandler<T>): void => {
    redisClient.subscribe(topic, (message) => {
        const parsedMessage: Message<T> = JSON.parse(message);
        handler(parsedMessage);
    });
};