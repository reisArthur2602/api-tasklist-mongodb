import { db } from '../../db/prisma';
import { TaskResponse } from '../../models/TaskModel';

export const DeleteTaskService = async (id: string): Promise<TaskResponse> => {
  return await db.task
    .delete({ where: { id } })
    .then((res) => res)
    .catch(() => {
      throw new Error('Nenhuma tarefa foi encontrada');
    });
};
