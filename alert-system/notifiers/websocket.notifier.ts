import { Server } from 'socket.io';
import { Alert } from '../schemas/alert.schema';

export class WebSocketNotifier {
    private io: Server;

    constructor(server) {
        this.io = new Server(server);
    }

    public send(alert: Alert) {
        this.io.emit('alert', alert);
    }
}