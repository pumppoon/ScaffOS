import express from 'express';
import { createServer } from './server';
import { setupRoutes } from './routes';

const app = express();
const PORT = process.env.PORT || 3000;

setupRoutes(app);

createServer(app).listen(PORT, () => {
  console.log(`Portfolio Tracker service running on port ${PORT}`);
});