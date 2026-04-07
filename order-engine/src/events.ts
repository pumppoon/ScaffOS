export interface OrderCreatedEvent {
  orderId: string;
  type: OrderType;
  price: number;
  quantity: number;
  timestamp: Date;
}

export interface OrderCancelledEvent {
  orderId: string;
  timestamp: Date;
}