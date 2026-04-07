import { WebSocket } from 'ws';
import { PriceData, Client } from './types';

export class PriceAggregator {
  private prices: PriceData[] = [];
  private clients: Client[] = [];

  constructor(private wss: WebSocket.Server) {}

  addClient(client: Client) {
    this.clients.push(client);
    client.on('close', () => this.removeClient(client));
  }

  removeClient(client: Client) {
    this.clients = this.clients.filter(c => c !== client);
  }

  updatePrice(priceData: PriceData) {
    this.prices.push(priceData);
    this.broadcast(priceData);
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