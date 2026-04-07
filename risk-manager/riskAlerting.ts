import { EventEmitter } from 'events';

class RiskAlerting extends EventEmitter {
    constructor() {
        super();
    }

    alert(message: string) {
        this.emit('riskAlert', message);
    }

    onAlert(listener: (message: string) => void) {
        this.on('riskAlert', listener);
    }
}

export default RiskAlerting;