import * as dotenv from 'dotenv';
dotenv.config();

const config = {
    PORT: process.env.PORT ? parseInt(process.env.PORT) : 3000,
    METRICS_ENABLED: process.env.METRICS_ENABLED === 'true',
};

export default config;