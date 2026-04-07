import { Alert } from '../schemas/alert.schema';
import { EventEmitter } from 'events';

class AlertService extends EventEmitter {
    private alerts: Alert[] = [];

    public createAlert(alert: Alert) {
        try {
            this.validateAlert(alert);
            this.alerts.push(alert);
            this.emit(ALERT_PUBLISHED, { alert });
        } catch (error) {
            console.error('Error creating alert:', error);
        }
    }

    private validateAlert(alert: Alert) {
        if (!alert.id || !alert.type || !alert.message || alert.threshold < 0) {
            throw new Error('Invalid alert properties');
        }
    }
}

export const alertService = new AlertService();