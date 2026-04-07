import express from 'express';
import metricsRouter from './services/metrics';
import userRoutes from './routes/userRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for logging requests
app.use(morgan('combined'));

// Routes
app.use('/api/users', userRoutes);
app.use('/api', metricsRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});