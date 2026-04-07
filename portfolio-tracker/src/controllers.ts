import logger from './logger';

export const getHistoricalPerformance = async (req: Request, res: Response): Promise<void> => {
  const requestId = req.headers['x-request-id'] || 'unknown';
  logger.info({ requestId, portfolioId: req.query.portfolioId }, 'Received request for historical performance');
  await query('portfolioId').isString().trim().escape().run(req);
  const { portfolioId } = req.query as unknown as { portfolioId: PortfolioId };
  const cacheKey = `historical_performance_${portfolioId}`;

  const cachedData = getCacheData(cacheKey);
  if (cachedData) {
    logger.info({ requestId, portfolioId }, 'Returning cached data');
    return res.json(cachedData);
  }

  try {
    const start = Date.now();
    const response = await axios.get(`${config.orderEngineUrl}/historical-performance`, {
      params: { portfolioId },
      validateStatus: (status) => status < 500
    });
    const duration = Date.now() - start;
    logger.info({ requestId, duration, portfolioId }, 'Fetched data from external API');
    setCacheData(cacheKey, response.data);
    res.json(response.data);
  } catch (error) {
    logger.error({ requestId, error }, 'Error fetching historical performance');
    res.status(500).send('Error fetching historical performance');
  }
};