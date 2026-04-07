import { Request, Response } from 'express';
import axios from 'axios';
import { query } from 'express-validator';

export const getHistoricalPerformance = async (req: Request, res: Response) => {
  await query('portfolioId').isString().trim().escape().run(req);
  const { portfolioId } = req.query;
  try {
    const response = await axios.get(`http://order-engine/api/historical-performance?portfolioId=${portfolioId}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching historical performance');
  }
};