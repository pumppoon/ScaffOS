import { Alert } from '../schemas/alert.schema';
import { EventEmitter } from 'events';

class AlertService extends EventEmitter {
    private alerts: Alert[] = [];

    public createAlert(alert: Alert) {
        this.alerts.push(alert);
        this.emit(ALERT_PUBLISHED, { alert });
    }
}

export const alertService = new AlertService();