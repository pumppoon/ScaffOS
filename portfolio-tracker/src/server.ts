import express from 'express';
import cors from 'cors';

export const createServer = (app: express.Application) => {
  app.use(cors());
  return app;
};