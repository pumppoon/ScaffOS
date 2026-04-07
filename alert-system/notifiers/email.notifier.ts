import nodemailer from 'nodemailer';
import { Alert } from '../schemas/alert.schema';

export class EmailNotifier {
    private transporter;

    constructor(emailConfig) {
        this.transporter = nodemailer.createTransport(emailConfig);
    }

    public async send(alert: Alert) {
        try {
            if (!alert || !alert.id || !alert.type || !alert.message) {
                throw new Error('Invalid alert object');
            }
            await this.transporter.sendMail({
                from: 'alerts@example.com',
                to: 'user@example.com',
                subject: `Alert: ${alert.type}`,
                text: alert.message,
            });
        } catch (error) {
            console.error('Error sending alert email:', error);
        }
    }
}