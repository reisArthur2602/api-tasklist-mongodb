import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import { TaskRoute } from './routes/TaskRoutes';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/task', TaskRoute);

app.listen(process.env.PORT, () =>
  console.log(`🚀 Server rodando na porta ${process.env.PORT}`)
);
