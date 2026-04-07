const log = (message: string, context?: Record<string, any>) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`, context);
};

export { log };