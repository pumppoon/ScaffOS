import { logError } from './logger';

getHistoricalPrices(symbol: string, exchange: ExchangeName, startTimestamp: number, endTimestamp: number): PriceData[] {
    const reqId = crypto.randomUUID();
    logRequest(reqId, 'GET_HISTORICAL_PRICES', 'N/A');
    try {
        // Input validation
        if (!symbol || !exchange || startTimestamp >= endTimestamp) {
            throw new Error('Invalid input parameters');
        }
        const historicalPrices = this.prices.filter(price => 
            price.symbol === symbol && 
            price.exchange === exchange && 
            price.timestamp >= startTimestamp && 
            price.timestamp <= endTimestamp
        );
        logResponse(reqId, 'GET_HISTORICAL_PRICES', 'N/A', 0);
        return historicalPrices;
    } catch (error) {
        logError(reqId, error);
        return []; // Graceful degradation
    }
}