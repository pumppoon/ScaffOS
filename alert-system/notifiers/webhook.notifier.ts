import axios from 'axios';
import { Alert } from '../schemas/alert.schema';

export class WebhookNotifier {
    private url: string;

    constructor(url: string) {
        this.url = url;
    }

    public async send(alert: Alert) {
        try {
            await axios.post(this.url, alert);
        } catch (error) {
            console.error('Error sending alert to webhook:', error);
        }
    }
}