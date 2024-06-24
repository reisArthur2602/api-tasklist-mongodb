import { endOfYear, startOfYear } from 'date-fns';
import { db } from '../../db/prisma';
import { TaskResponse } from '../../models/TaskModel';

export const MonthTaskService = async (
  macaddress?: string
): Promise<TaskResponse[]> => {
  const current = new Date();

  const filter = {
    ...(macaddress
      ? {
          macaddress,
          when: { gte: startOfYear(current), lte: endOfYear(current) },
        }
      : {
          isGuest: true,
          when: { gte: startOfYear(current), lte: endOfYear(current) },
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
