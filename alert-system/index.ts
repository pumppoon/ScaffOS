import { alertService } from './services/alert.service';
import { WebhookNotifier } from './notifiers/webhook.notifier';
import { EmailNotifier } from './notifiers/email.notifier';
import { WebSocketNotifier } from './notifiers/websocket.notifier';

const webhookNotifier = new WebhookNotifier('http://example.com/webhook');
const emailNotifier = new EmailNotifier({/* SMTP config */});
const websocketNotifier = new WebSocketNotifier(/* HTTP server */);

alertService.on(ALERT_PUBLISHED, async (event) => {
    await webhookNotifier.send(event.alert);
    await emailNotifier.send(event.alert);
    websocketNotifier.send(event.alert);
});