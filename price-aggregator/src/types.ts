export interface PriceData {
  /** The exchange where the price is listed */
  exchange: string;
  /** The trading symbol for the asset */
  symbol: string;
  /** The current price of the asset */
  price: number;
  /** The timestamp of the price in milliseconds since epoch */
  timestamp: number;
}

export type Client = WebSocket & { clientId: string }; // Branded type to associate a client ID

export interface PriceUpdateMessage {
  type: 'priceUpdate';
  data: PriceData;
}