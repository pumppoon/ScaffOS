import { v4 as uuidv4 } from 'uuid';

const apiKeys: Record<string, string> = {};

export const generateApiKey = () => {
    const apiKey = uuidv4();
    apiKeys[apiKey] = 'active';
    return apiKey;
};

export const validateApiKey = (apiKey: string) => {
    return apiKeys[apiKey] === 'active';
};

export const revokeApiKey = (apiKey: string) => {
    delete apiKeys[apiKey];
};