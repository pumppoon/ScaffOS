import { WebSocket } from 'ws';
import { PriceAggregator } from '../src/priceAggregator';
import { PriceData } from '../src/types';

describe('PriceAggregator', () => {
  let wss: WebSocket.Server;
  let priceAggregator: PriceAggregator;
  let mockClient: WebSocket;

  beforeEach(() => {
    wss = new WebSocket.Server({ noServer: true });
    priceAggregator = new PriceAggregator(wss);
    mockClient = new WebSocket('ws://localhost');
    priceAggregator.addClient(mockClient);
  });

  afterEach(() => {
    priceAggregator.removeClient(mockClient);
    wss.close();
  });

  test('should add clients and broadcast price updates', () => {
    const priceData: PriceData = {
      exchange: 'Exchange1' as const,
      symbol: 'BTC/USD',
      price: 50000,
      timestamp: Date.now(),
    };

    const sendSpy = jest.spyOn(mockClient, 'send');
    priceAggregator.updatePrice(priceData);

    expect(sendSpy).toHaveBeenCalledWith(JSON.stringify(priceData));
  });

  test('should retrieve current prices', () => {
    const priceData: PriceData = {
      exchange: 'Exchange1' as const,
      symbol: 'BTC/USD',
      price: 50000,
      timestamp: Date.now(),
    };

    priceAggregator.updatePrice(priceData);
    const prices = priceAggregator.getCurrentPrices();

    expect(prices).toContainEqual(priceData);
  });
});