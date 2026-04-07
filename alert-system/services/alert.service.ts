import { SharedAlert } from '../schemas/shared.types';
import { EventEmitter } from 'events';
import xss from 'xss'; // Input sanitization

class AlertService extends EventEmitter {
    private alerts: SharedAlert[] = [];

    public createAlert(alert: SharedAlert) {
        try {
            this.validateAlert(alert);
            this.sanitizeAlert(alert); // Input sanitization
            this.alerts.push(alert);
            this.emit(ALERT_PUBLISHED, { alert });
        } catch (error) {
            console.error('Error creating alert:', error);
        }
    }

    private validateAlert(alert: SharedAlert) {
        if (!alert.id || !alert.type || !alert.message || alert.threshold < 0) {
            throw new Error('Invalid alert properties');
        }
    }

    private sanitizeAlert(alert: SharedAlert) {
        alert.message = xss(alert.message); // Sanitizing the message
    }
}

export const alertService = new AlertService();