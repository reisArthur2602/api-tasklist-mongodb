import { Router } from 'express';
export const TaskRoute = Router();

TaskRoute.get('/teste', (req, res) => {
  return res.send('olá mundo');
});
