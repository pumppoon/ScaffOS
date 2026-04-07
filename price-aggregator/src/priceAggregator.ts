import { WebSocket } from 'ws';
import { PriceData, Client } from './types';
import { logRequest, logResponse, logError } from './logger';

export class PriceAggregator {
  private prices: PriceData[] = [];
  private clients: Client[] = [];

  constructor(private wss: WebSocket.Server) {}

  addClient(client: Client) {
    const reqId = client.clientId;
    logRequest(reqId, 'CONNECT', '');
    this.clients.push(client);
    client.on('close', () => this.removeClient(client));
  }

  removeClient(client: Client) {
    this.clients = this.clients.filter(c => c !== client);
  }

  updatePrice(priceData: PriceData) {
    const start = Date.now();
    this.prices.push(priceData);
    this.broadcast(priceData);
    const duration = Date.now() - start;
    logResponse(priceData.symbol, 'UPDATE', priceData.symbol, duration);
  }

  broadcast(priceData: PriceData) {
    this.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(priceData));
      }
    });
  }

  getCurrentPrices() {
    return this.prices;
  }

  calculateVWAP() {
    // Implement VWAP calculation logic here
  }
}