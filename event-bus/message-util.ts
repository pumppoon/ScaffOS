import { MessageSchema } from './message-schema';

export function createMessage<T>(eventType: string, payload: T): MessageSchema<T> {
    return {
        eventType,
        payload,
        timestamp: Date.now(),
    };
}
