// Import necessary modules
import { Request, Response } from 'express';
import OrderManager from './order-manager';
import { Order } from './types';

// Instantiate OrderManager to manage order operations
const orderManager = new OrderManager();

// Validate if the provided order has the required fields
const isValidOrder = (order: Order): boolean => {
  return order.id && order.type && order.price > 0 && order.quantity > 0;
};

// Handle creating a new order
export const createOrder = (req: Request, res: Response) => {
  try {
    const order: Order = req.body;
    // Validate the order before adding
    if (!isValidOrder(order)) {
      return res.status(400).send({ error: 'Invalid order data. Ensure all fields are correctly filled.' });
    }
    // Add the order using the OrderManager
    orderManager.addOrder(order);
    res.status(201).send(order);
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).send({ error: 'Internal server error while creating order.' });
  }
};

// Handle canceling an existing order
export const cancelOrder = (req: Request, res: Response) => {
  try {
    const { orderId } = req.params;
    // Ensure order ID is provided
    if (!orderId) {
      return res.status(400).send({ error: 'Order ID is required for cancellation.' });
    }
    // Cancel the order using the OrderManager
    orderManager.cancelOrder(orderId);
    res.status(204).send();
  } catch (error) {
    console.error('Error canceling order:', error);
    res.status(500).send({ error: 'Internal server error while canceling order.' });
  }
};