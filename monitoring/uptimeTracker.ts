import { EventEmitter } from 'events';

class UptimeTracker extends EventEmitter {
    private startTime: number;

    constructor() {
        super();
        this.startTime = Date.now();
    }

    public getUptime(): number {
        return Date.now() - this.startTime;
    }
}

export const uptimeTracker = new UptimeTracker();