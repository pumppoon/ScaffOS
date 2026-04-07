import express from 'express';
import { Server } from 'ws';
import { PriceAggregator } from './priceAggregator';

const app = express();
const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

const wss = new Server({ server });
const aggregator = new PriceAggregator(wss);

app.get('/prices', (req, res) => {
  res.json(aggregator.getCurrentPrices());
});

wss.on('connection', (ws) => {
  aggregator.addClient(ws);
});