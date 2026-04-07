import { Request, Response } from 'express';
import OrderManager from './order-manager';
import { Order } from './types';

const orderManager = new OrderManager();

export const createOrder = (req: Request, res: Response) => {
  const order: Order = req.body;
  orderManager.addOrder(order);
  res.status(201).send(order);
};

export const cancelOrder = (req: Request, res: Response) => {
  const { orderId } = req.params;
  orderManager.cancelOrder(orderId);
  res.status(204).send();
};