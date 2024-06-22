import { Router } from 'express';
import { db } from '../db/prisma';
export const TaskRoute = Router();

TaskRoute.post('/', async (req, res) => {
  const task = await db.task.create({ data: req.body });
  return res.json(task);
});

TaskRoute.get('/all', async (req, res) => {
  return res.json({ date: new Date() });
});
