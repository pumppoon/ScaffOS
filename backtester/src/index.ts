import express from 'express'; import { BacktestController } from './backtestController';

const app = express();
const port = 3000;

app.use(express.json());

const backtestController = new BacktestController();

app.post('/backtest', backtestController.runBacktest.bind(backtestController));
app.get('/results/:id', backtestController.getResults.bind(backtestController));

app.listen(port, () => {
    console.log(`Backtester service listening at http://localhost:${port}`);
});