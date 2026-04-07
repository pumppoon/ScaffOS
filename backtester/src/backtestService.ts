import axios from 'axios'; import { BacktestResult } from './types';

const historicalDataCache: Record<string, { data: any[]; timestamp: number }> = {};
const CACHE_EXPIRATION = 3600000; // 1 hour expiration

export class BacktestService {
    public async runBacktest(strategy: any): Promise<BacktestResult> {
        const historicalData = await this.getHistoricalData(strategy);
        const result: BacktestResult = this.simulateStrategy(historicalData, strategy);
        return result;
    }

    private async getHistoricalData(strategy: any): Promise<any[]> {
        const symbol = strategy.symbol;
        const now = Date.now();
        if (historicalDataCache[symbol] && (now - historicalDataCache[symbol].timestamp < CACHE_EXPIRATION)) {
            return historicalDataCache[symbol].data;
        }
        const response = await axios.get(`http://price-aggregator/historical-prices?symbol=${symbol}`);
        historicalDataCache[symbol] = { data: response.data, timestamp: now };
        return response.data;
    }

    private simulateStrategy(data: any[], strategy: any): BacktestResult {
        // Implement more efficient strategy simulation logic here
        // Example: Use a single loop approach or reduce function to minimize allocations
        let totalProfit = 0;
        for (let i = 1; i < data.length; i++) {
            if (data[i].signal === strategy.entrySignal) {
                totalProfit += data[i].price - data[i - 1].price;
            }
        }
        return { success: true, metrics: { totalProfit } };
    }

    public async getResults(id: string): Promise<BacktestResult> {
        // Logic to retrieve backtest results from database or in-memory storage
        return { success: true, metrics: {} }; // Placeholder return
    }
}