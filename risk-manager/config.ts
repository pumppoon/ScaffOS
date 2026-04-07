import { z } from 'zod';

const configSchema = z.object({
    DRAW_DOWN_THRESHOLD: z.number().min(0).default(10),
    POSITION_LIMIT_DEFAULT: z.number().min(0).default(Infinity),
});

const parsedConfig = configSchema.safeParse(process.env);

if (!parsedConfig.success) {
    throw new Error('Configuration validation failed: ' + parsedConfig.error);
}

const config = parsedConfig.data;

export default config;