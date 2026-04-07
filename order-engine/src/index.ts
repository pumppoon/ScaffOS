import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Placeholder for routes
app.get('/', (req, res) => {
  res.send('Order Engine is running');
});

app.listen(PORT, () => {
  console.log(`Order Engine listening on port ${PORT}`);
});