import dotenv from 'dotenv';
import Joi from 'joi';

dotenv.config();

const envSchema = Joi.object({
  PORT: Joi.number().default(3000),
  DATABASE_URL: Joi.string().uri().required(),
}).unknown();

const { error, value: envVars } = envSchema.validate(process.env);
if (error) {
  throw new Error(`Configuration error: ${error.message}`);
}

export const config = {
  port: envVars.PORT,
  databaseUrl: envVars.DATABASE_URL,
};