import request from 'supertest';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { createOrder, cancelOrder } from '../src/order-controller';

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.post('/orders', createOrder);
app.delete('/orders/:orderId', cancelOrder);

describe('Order Controller', () => {
  it('should create an order successfully', async () => {
    const response = await request(app).post('/orders').send({
      id: '1',
      type: 'limit',
      price: 100,
      quantity: 2,
      timestamp: new Date()
    });
    expect(response.status).toBe(201);
    expect(response.body.id).toBe('1');
  });

  it('should return 400 for invalid order data', async () => {
    const response = await request(app).post('/orders').send({
      id: '1',
      type: 'limit',
      price: -100,
      quantity: 2
    });
    expect(response.status).toBe(400);
  });

  it('should cancel an order successfully', async () => {
    await request(app).post('/orders').send({
      id: '1',
      type: 'limit',
      price: 100,
      quantity: 2,
      timestamp: new Date()
    });
    const response = await request(app).delete('/orders/1');
    expect(response.status).toBe(204);
  });

  it('should return 400 when order ID is missing', async () => {
    const response = await request(app).delete('/orders/');
    expect(response.status).toBe(400);
  });
});