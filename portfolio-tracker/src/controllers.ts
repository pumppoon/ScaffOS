import { Request, Response } from 'express';
import axios from 'axios';

export const getAllocations = async (req: Request, res: Response) => {
  try {
    const response = await axios.get('http://order-engine/api/allocations');
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching allocations');
  }
};

export const getPnL = async (req: Request, res: Response) => {
  try {
    const response = await axios.get('http://order-engine/api/pnl');
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching PnL');
  }
};