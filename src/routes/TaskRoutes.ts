import { Router } from 'express';
import {
  AllTaskController,
  CreateTaskController,
  DeleteTaskController,
  DoneTaskController,
  GetTaskController,
  LateTaskController,
  TodayTaskController,
  UpdateTaskController,
  WeekTaskController,
} from '../controllers/task';
import { YearTaskController } from '../controllers/task/filter-task/year-task';
import { MonthTaskController } from '../controllers/task/filter-task/month-task';

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

TaskRoute.get('/:id', async (req, res) => {
  const { statusCode, body } = await GetTaskController({
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

TaskRoute.patch('/:id/:done', async (req, res) => {
  const { statusCode, body } = await DoneTaskController({
    params: req.params,
  });
  return res.status(statusCode).json(body);
});

// filter
TaskRoute.get('/filter/all/:macaddress?', async (req, res) => {
  const { statusCode, body } = await AllTaskController({
    params: req.params,
  });
  return res.status(statusCode).json(body);
});

TaskRoute.get('/filter/late/:macaddress?', async (req, res) => {
  const { statusCode, body } = await LateTaskController({
    params: req.params,
  });
  return res.status(statusCode).json(body);
});

TaskRoute.get('/filter/today/:macaddress?', async (req, res) => {
  const { statusCode, body } = await TodayTaskController({
    params: req.params,
  });
  return res.status(statusCode).json(body);
});

TaskRoute.get('/filter/week/:macaddress?', async (req, res) => {
  const { statusCode, body } = await WeekTaskController({
    params: req.params,
  });
  return res.status(statusCode).json(body);
});

TaskRoute.get('/filter/year/:macaddress?', async (req, res) => {
  const { statusCode, body } = await YearTaskController({
    params: req.params,
  });
  return res.status(statusCode).json(body);
});
TaskRoute.get('/filter/month/:macaddress?', async (req, res) => {
  const { statusCode, body } = await MonthTaskController({
    params: req.params,
  });
  return res.status(statusCode).json(body);
});
