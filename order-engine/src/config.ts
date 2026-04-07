import dotenv from 'dotenv';
import Joi from 'joi';
import { secretsManager } from './secretsManager';

dotenv.config();

const envSchema = Joi.object({
  PORT: Joi.number().default(3000),
  DATABASE_URL: Joi.string().uri().required(),
  API_SECRET: Joi.string().required(),
}).unknown();

const { error, value: envVars } = envSchema.validate(process.env);
if (error) {
  throw new Error(`Configuration error: ${error.message}`);
}

export const config = {
  port: envVars.PORT,
  databaseUrl: envVars.DATABASE_URL,
  apiSecret: secretsManager.getSecret('API_SECRET'),
};