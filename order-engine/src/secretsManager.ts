export const secretsManager = {
  getSecret: (key: string) => {
    // Logic to retrieve secret from a secure storage.
    // For demonstration, we will just return the value from environment variables.
    return process.env[key];
  }
};