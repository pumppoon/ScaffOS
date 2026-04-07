getHistoricalPrices(symbol: string, exchange: ExchangeName, startTimestamp: number, endTimestamp: number): PriceData[] {
    const reqId = crypto.randomUUID(); // Generate a unique request ID
    logRequest(reqId, 'GET_HISTORICAL_PRICES', 'N/A');
    const historicalPrices = this.prices.filter(price => 
        price.symbol === symbol && 
        price.exchange === exchange && 
        price.timestamp >= startTimestamp && 
        price.timestamp <= endTimestamp
    );
    logResponse(reqId, 'GET_HISTORICAL_PRICES', 'N/A', 0);
    return historicalPrices;
}