import { Router } from 'express';
import { getAllocations, getPnL } from './controllers';

const router = Router();

router.get('/allocations', getAllocations);
router.get('/pnl', getPnL);

export const setupRoutes = (app: any) => {
  app.use('/api/v1', router);
};