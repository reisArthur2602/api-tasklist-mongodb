import { db } from '../../../db/prisma';
import { TaskResponse } from '../../../models/TaskModel';

export const AllTaskService = async (
  macaddress?: string
): Promise<TaskResponse[]> => {
  const current = new Date();
  const filter = {
    ...(macaddress
      ? { macaddress, when: { gte: current } }
      : { isGuest: true, when: { gte: current } }),
  };

  return await db.task
    .findMany({ where: filter, orderBy: { when: 'asc' } })
    .then((res) => {
      if (res.length === 0) throw new Error('Nenhuma tarefa encontrada');
      return res;
    })
    .catch(() => {
      throw new Error('Nenhuma tarefa encontrada');
    });
};
