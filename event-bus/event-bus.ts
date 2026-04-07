export interface EventBus {
    publish(event: string, data: any): Promise<void>;
    subscribe(event: string, listener: (data: any) => void): Promise<void>;
    getLatestData(event: string): Promise<any | null>;
}