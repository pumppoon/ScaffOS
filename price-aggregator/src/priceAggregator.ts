import { logRequest, logResponse, logError } from './logger';

... 

  addClient(client: Client) {
    const reqId = crypto.randomUUID(); // Generate a unique request ID
    logRequest(reqId, 'ADD_CLIENT', 'N/A');
    this.clients.push(client);
    client.on('close', () => this.removeClient(client));
    logResponse(reqId, 'ADD_CLIENT', 'N/A', 0);
  }

  removeClient(client: Client) {
    const reqId = crypto.randomUUID(); // Generate a unique request ID
    logRequest(reqId, 'REMOVE_CLIENT', 'N/A');
    this.clients = this.clients.filter(c => c !== client);
    logResponse(reqId, 'REMOVE_CLIENT', 'N/A', 0);
  }

  updatePrice(priceData: PriceData) {
    const reqId = crypto.randomUUID(); // Generate a unique request ID
    logRequest(reqId, 'UPDATE_PRICE', 'N/A');
    this.prices.push(priceData);
    this.broadcast(priceData);
    logResponse(reqId, 'UPDATE_PRICE', 'N/A', 0);
  }

  broadcast(priceData: PriceData) {
    const reqId = crypto.randomUUID(); // Generate a unique request ID
    logRequest(reqId, 'BROADCAST', 'N/A');
    this.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(priceData));
      }
    });
    logResponse(reqId, 'BROADCAST', 'N/A', 0);
  }

  getCurrentPrices() {
    const reqId = crypto.randomUUID(); // Generate a unique request ID
    logRequest(reqId, 'GET_CURRENT_PRICES', 'N/A');
    const prices = this.prices;
    logResponse(reqId, 'GET_CURRENT_PRICES', 'N/A', 0);
    return prices;
  }
