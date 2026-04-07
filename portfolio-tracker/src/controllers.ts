export const getHistoricalPerformance = async (req: Request, res: Response) => {
  const { portfolioId } = req.query;
  try {
    const response = await axios.get(`http://order-engine/api/historical-performance?portfolioId=${portfolioId}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching historical performance');
  }
};