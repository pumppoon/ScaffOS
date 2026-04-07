import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { config } from './config';

const app = express();
const PORT = config.port;

// Middleware for CORS
app.use(cors());

// Middleware for body parsing
app.use(bodyParser.json());

// Placeholder for routes
app.get('/', (req, res) => {
  res.send('Order Engine is running');
});

app.listen(PORT, () => {
  console.log(`Order Engine listening on port ${PORT}`);
});