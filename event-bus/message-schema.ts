export interface MessageSchema<T> {
    eventType: string;
    payload: T;
    timestamp: number;
}
