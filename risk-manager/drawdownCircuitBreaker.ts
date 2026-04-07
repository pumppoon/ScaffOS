class DrawdownCircuitBreaker {
    private drawdownThreshold: number;
    private currentDrawdown: number;
    private isTriggered: boolean;

    constructor(threshold: number) {
        this.drawdownThreshold = threshold;
        this.currentDrawdown = 0;
        this.isTriggered = false;
    }

    updateDrawdown(newDrawdown: number) {
        this.currentDrawdown = newDrawdown;
        if (this.currentDrawdown >= this.drawdownThreshold) {
            this.trigger();
        }
    }

    trigger() {
        this.isTriggered = true;
        // Logic to halt trading or alert.
    }

    reset() {
        this.isTriggered = false;
        this.currentDrawdown = 0;
    }
}

export default DrawdownCircuitBreaker;