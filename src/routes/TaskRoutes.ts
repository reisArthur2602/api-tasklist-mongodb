import { Router } from 'express';
import {
  CreateTaskController,
  DeleteTaskController,
  GetTaskController,
  UpdateTaskController,
} from '../controllers/task';

export const TaskRoute = Router();

TaskRoute.post('/', async (req, res) => {
  const { statusCode, body } = await CreateTaskController({ body: req.body });
  return res.status(statusCode).json(body);
});

TaskRoute.put('/:id', async (req, res) => {
  const { statusCode, body } = await UpdateTaskController({
    body: req.body,
    params: req.params,
  });
  return res.status(statusCode).json(body);
});

TaskRoute.delete('/:id', async (req, res) => {
  const { statusCode, body } = await DeleteTaskController({
    params: req.params,
  });
  return res.status(statusCode).json(body);
});

TaskRoute.get('/:id', async (req, res) => {
  const { statusCode, body } = await GetTaskController({
    params: req.params,
  });
  return res.status(statusCode).json(body);
});
