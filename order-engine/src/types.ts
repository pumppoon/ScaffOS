export type OrderType = 'limit' | 'market' | 'stop';

export interface Order {
  id: string;
  type: OrderType;
  price: number;
  quantity: number;
  timestamp: Date;
}

export interface LimitOrder extends Order {
  type: 'limit';
}

export interface MarketOrder extends Order {
  type: 'market';
}

export interface StopOrder extends Order {
  type: 'stop';
  stopPrice: number;
}