export interface PriceData {
  exchange: string;
  symbol: string;
  price: number;
  timestamp: number;
}

export type Client = WebSocket;
