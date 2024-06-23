import { Router } from 'express';
import { CreateTaskController } from '../controllers/task/create-task';

export const TaskRoute = Router();

TaskRoute.post('/', async (req, res) => {
  const { statusCode, body } = await CreateTaskController({ body: req.body });
  return res.status(statusCode).json(body);
});
