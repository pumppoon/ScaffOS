import nodemailer from 'nodemailer';
import { Alert } from '../schemas/alert.schema';

export class EmailNotifier {
    private transporter;

    constructor(emailConfig) {
        this.transporter = nodemailer.createTransport(emailConfig);
    }

    public async send(alert: Alert) {
        await this.transporter.sendMail({
            from: 'alerts@example.com',
            to: 'user@example.com',
            subject: `Alert: ${alert.type}`,
            text: alert.message,
        });
    }
}