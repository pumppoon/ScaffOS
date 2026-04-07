import { alertService } from '../services/alert.service';
import { ALERT_PUBLISHED } from '../events/alert.events';
import { SharedAlert } from '../schemas/shared.types';

describe('AlertService', () => {
    it('should create and emit an alert successfully', () => {
        const alert = { id: '1', type: 'info', message: '<script>alert</script>', threshold: 10, timestamp: new Date() };
        const emitSpy = jest.spyOn(alertService, 'emit');
        alertService.createAlert(alert);
        expect(emitSpy).toHaveBeenCalledWith(ALERT_PUBLISHED, { alert });
    });

    it('should throw error for invalid alert', () => {
        const alert = { id: '', type: '', message: '', threshold: -1, timestamp: new Date() };
        expect(() => alertService.createAlert(alert)).toThrow('Invalid alert properties');
    });

    it('should sanitize alert message', () => {
        const alert = { id: '1', type: 'info', message: '<script>alert</script>', threshold: 10, timestamp: new Date() };
        alertService.createAlert(alert);
        expect(alert.message).toBe('\u003Cscript\u003Ealert\u003C/script\u003E'); // xss sanitized output
    });
});
