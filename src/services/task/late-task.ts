
import { db } from '../../db/prisma';
import { TaskResponse } from '../../models/TaskModel';

export const LateTaskService = async (
  macaddress?: string
): Promise<TaskResponse[]> => {
  
  const current = new Date();

  const filter = {
    ...(macaddress
      ? { macaddress, when: { lt: current } }
      : { isGuest: true, when: { lt: current } }),
  };

  return await db.task
    .findMany({
      where: filter,
    })
    .then((res) => {
      if (res.length === 0) throw new Error('Nenhuma tarefa encontrada');
      return res;
    })
    .catch(() => {
      throw new Error('Nenhuma tarefa encontrada');
    });
};
