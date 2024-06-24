import { endOfWeek, startOfWeek } from 'date-fns';
import { db } from '../../../db/prisma';
import { TaskResponse } from '../../../models/TaskModel';

export const WeekTaskService = async (
  macaddress?: string
): Promise<TaskResponse[]> => {
  const current = new Date();

  const filter = {
    ...(macaddress
      ? {
          macaddress,
          when: { gte: startOfWeek(current) && current, lte: endOfWeek(current) },
        }
      : {
          isGuest: true,
          when: { gte: startOfWeek(current) && current, lte: endOfWeek(current) },
        }),
  };

  return await db.task
    .findMany({
      where: filter,
      orderBy: { when: 'asc' },
    })
    .then((res) => {
      if (res.length === 0) throw new Error('Nenhuma tarefa encontrada');
      return res;
    })
    .catch(() => {
      throw new Error('Nenhuma tarefa encontrada');
    });
};
