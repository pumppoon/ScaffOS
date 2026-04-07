import PositionLimit from './positionLimit';
import DrawdownCircuitBreaker from './drawdownCircuitBreaker';
import RiskAlerting from './riskAlerting';

class RiskManager {
    private positionLimit: PositionLimit;
    private drawdownBreaker: DrawdownCircuitBreaker;
    private riskAlerting: RiskAlerting;

    constructor() {
        this.positionLimit = new PositionLimit();
        this.drawdownBreaker = new DrawdownCircuitBreaker(10); // Example threshold
        this.riskAlerting = new RiskAlerting();
    }

    setPositionLimit(symbol: string, limit: number) {
        this.positionLimit.setLimit(symbol, limit);
    }

    checkPosition(position: Position): boolean {
        return this.positionLimit.checkLimit(position);
    }

    updateDrawdown(newDrawdown: number) {
        this.drawdownBreaker.updateDrawdown(newDrawdown);
    }

    onRiskAlert(listener: (message: string) => void) {
        this.riskAlerting.onAlert(listener);
    }
}

export default RiskManager;