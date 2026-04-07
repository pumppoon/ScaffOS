export interface EventBus<T = unknown> {
    publish(event: string, data: T): Promise<void>;
    subscribe(event: string, listener: (data: T) => void): Promise<void>;
    getLatestData(event: string): Promise<T | null>;
}