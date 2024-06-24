import { endOfDay, startOfDay } from 'date-fns';
import { db } from '../../db/prisma';
import { TaskResponse } from '../../models/TaskModel';

export const TodayTaskService = async (
  macaddress?: string
): Promise<TaskResponse[]> => {
  const current = new Date();

  const filter = {
    ...(macaddress
      ? {
          macaddress,
          when: { gte: startOfDay(current), lte: endOfDay(current) },
        }
      : {
          isGuest: true,
          when: { gte: startOfDay(current), lte: endOfDay(current) },
        }),
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
