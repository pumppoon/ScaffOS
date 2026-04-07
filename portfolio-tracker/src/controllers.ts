import { Request, Response } from 'express';
import axios from 'axios';
import { query } from 'express-validator';
import { PortfolioId } from './types';
import NodeCache from 'node-cache';

const cache = new NodeCache({ stdTTL: 600 }); // Cache for 10 minutes

const getCacheData = (key: string): any => {
  return cache.get(key);
};

const setCacheData = (key: string, data: any): void => {
  cache.set(key, data);
};

export const getHistoricalPerformance = async (req: Request, res: Response): Promise<void> => {
  await query('portfolioId').isString().trim().escape().run(req);
  const { portfolioId } = req.query as unknown as { portfolioId: PortfolioId };
  const cacheKey = `historical_performance_${portfolioId}`;

  // Check if data is in cache
  const cachedData = getCacheData(cacheKey);
  if (cachedData) {
    return res.json(cachedData);
  }

  try {
    const response = await axios.get(`${config.orderEngineUrl}/historical-performance`, {
      params: { portfolioId },
      validateStatus: (status) => status < 500 // Only reject if status >= 500
    });
    setCacheData(cacheKey, response.data);
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching historical performance');
  }
};