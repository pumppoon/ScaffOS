import { Position } from './types';
import config from './config';

class PositionLimit {
    private limits: Map<string, number>;
    private cache: Map<string, boolean>;

    constructor() {
        this.limits = new Map();
        this.cache = new Map();
    }

    setLimit(symbol: string, limit: number) {
        if (limit < 0) throw new Error('Limit must be non-negative');
        this.limits.set(symbol, limit);
        this.cache.clear(); // Clear cache on limit update
    }

    checkLimit(position: Position): boolean {
        if (this.cache.has(position.symbol)) {
            return this.cache.get(position.symbol)!;
        }
        const limit = this.limits.get(position.symbol) || config.POSITION_LIMIT_DEFAULT;
        const isWithinLimit = position.amount <= limit;
        this.cache.set(position.symbol, isWithinLimit);
        return isWithinLimit;
    }
}

export default PositionLimit;