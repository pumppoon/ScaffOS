import { Request, Response } from 'express';
import { BacktestService } from './backtestService';

export class BacktestController {
    private backtestService: BacktestService;

    constructor() {
        this.backtestService = new BacktestService();
    }

    public async runBacktest(req: Request, res: Response): Promise<void> {
        const strategy = req.body.strategy;
        const results = await this.backtestService.runBacktest(strategy);
        res.status(200).json(results);
    }

    public async getResults(req: Request, res: Response): Promise<void> {
        const id = req.params.id;
        const result = await this.backtestService.getResults(id);
        res.status(200).json(result);
    }
}