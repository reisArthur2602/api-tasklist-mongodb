import { db } from '../../db/prisma';
import { TaskResponse } from '../../models/TaskModel';

export const DoneTaskService = async (
  id: string,
  done: boolean
): Promise<TaskResponse> => {
  return await db.task
    .update({ where: { id }, data: { done } })
    .then((res) => res)
    .catch(() => {
      throw new Error('Nenhuma tarefa foi encontrada');
    });
};
