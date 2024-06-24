import { db } from '../../db/prisma';
import { TaskResponse } from '../../models/TaskModel';

export const GetTaskService = async (id: string): Promise<TaskResponse> => {
  const task = await db.task.findFirst({ where: { id } });
  if (!task) throw new Error('Nenhuma tarefa encontrada');
  return task;
};
