const API_BASE_URL = '/api';

export const fetchHealthData = async () => {
    const response = await fetch(`${API_BASE_URL}/health`);
    return response.json();
};

export const fetchConfigData = async () => {
    const response = await fetch(`${API_BASE_URL}/config`);
    return response.json();
};