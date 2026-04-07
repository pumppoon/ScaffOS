class RedisEventBus implements EventBus {
    private subscribers: { [event: string]: Array<(data: any) => void> } = {};
    
    // ... existing methods 
    
    async subscribe(event: string, listener: (data: any) => void): Promise<void> {
        try {
            // ... existing validation 
            if (!this.subscribers[event]) {
                this.subscribers[event] = [];
            }
            this.subscribers[event].push(listener);
            // ... existing subscription logic 
        } catch (error) {
            console.error('Error subscribing to event:', error);
        }
    }
    
    async getSubscribers(event: string): Promise<Array<(data: any) => void>> {
        return this.subscribers[event] || [];
    }
}