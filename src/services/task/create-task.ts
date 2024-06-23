import { db } from '../../db/prisma';
import { TaskProps, TaskResponse } from '../../models/taskModel';

export const CreateTaskService = async (
  data: TaskProps
): Promise<TaskResponse> => {
  return await db.task
    .create({ data })
    .then((task) => task)
    .catch(() => {
      throw new Error('Erro ao criar tarefa');
    });
};
