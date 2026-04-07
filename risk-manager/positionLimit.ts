import { Position } from './types';

class PositionLimit {
    private limits: Map<string, number>;

    constructor() {
        this.limits = new Map();
    }

    setLimit(symbol: string, limit: number) {
        this.limits.set(symbol, limit);
    }

    checkLimit(position: Position): boolean {
        const limit = this.limits.get(position.symbol) || Infinity;
        return position.amount <= limit;
    }
}

export default PositionLimit;