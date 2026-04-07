import { Request, Response } from 'express';
import OrderManager from './order-manager';
import { Order } from './types';

const orderManager = new OrderManager();

export const createOrder = (req: Request, res: Response) => {
  try {
    const order: Order = req.body;
    if (!order.id || !order.type || order.price <= 0 || order.quantity <= 0) {
      return res.status(400).send({ error: 'Invalid order data' });
    }
    orderManager.addOrder(order);
    res.status(201).send(order);
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).send({ error: 'Internal server error' });
  }
};

export const cancelOrder = (req: Request, res: Response) => {
  try {
    const { orderId } = req.params;
    if (!orderId) {
      return res.status(400).send({ error: 'Order ID is required' });
    }
    orderManager.cancelOrder(orderId);
    res.status(204).send();
  } catch (error) {
    console.error('Error canceling order:', error);
    res.status(500).send({ error: 'Internal server error' });
  }
};