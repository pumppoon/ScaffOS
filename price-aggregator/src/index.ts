import express from 'express';
import cors from 'cors';

require('dotenv').config();
const DB_SECRET = process.env.DB_SECRET;

const app = express();
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON body

// Input sanitization function
const sanitizeInput = (input: string): string => {
    return input.replace(/[<>]/g, ''); // Simple sanitization for demonstration
};

app.get('/prices', (req, res) => {
    const symbol = sanitizeInput(req.query.symbol as string);
    const exchange = sanitizeInput(req.query.exchange as string);
    const startTimestamp = Number(req.query.startTimestamp);
    const endTimestamp = Number(req.query.endTimestamp);
    // Call the price aggregator logic...
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});