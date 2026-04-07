import dotenv from 'dotenv';

dotenv.config();

export const config = {
  orderEngineUrl: process.env.ORDER_ENGINE_URL || 'http://localhost:3000',
};