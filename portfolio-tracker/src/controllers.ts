import { Request, Response } from 'express';
import axios from 'axios';
import { query } from 'express-validator';
import { PortfolioId } from './types';

/**
 * Fetches the historical performance for a given portfolio.
 * @param req - The request object containing the portfolioId.
 * @param res - The response object to send the results.
 */
export const getHistoricalPerformance = async (req: Request, res: Response): Promise<void> => {
  await query('portfolioId').isString().trim().escape().run(req);
  const { portfolioId } = req.query as unknown as { portfolioId: PortfolioId };
  try {
    const response = await axios.get(`${config.orderEngineUrl}/historical-performance?portfolioId=${portfolioId}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching historical performance');
  }
};