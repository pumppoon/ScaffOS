import * as dotenv from 'dotenv';
import * as Joi from 'joi';

dotenv.config();

const schema = Joi.object({
    API_URL: Joi.string().uri().required(),
    ANALYTICS_API_KEY: Joi.string().required(),
}).unknown();

const { error, value: envVars } = schema.validate(process.env);

if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

const config = {
    apiUrl: envVars.API_URL,
    analyticsApiKey: envVars.ANALYTICS_API_KEY,
};

export default config;