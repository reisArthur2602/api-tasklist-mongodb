import { db } from '../../db/prisma';
import { TaskProps } from '../../models/TaskModel';

export const UpdateTaskService = async (id: string, data: TaskProps) => {
  const filter = {
    ...(data.macaddress
      ? {
          id: { not: id },
          when: data.when,
          macaddress: data.macaddress,
          isGuest: false,
        }
      : { id: { not: id }, when: data.when, isGuest: true }),
  };

  const existsDate = await db.task.findFirst({
    where: { AND: filter },
  });

  if (existsDate) throw new Error('Já existe uma tarefa neste dia e horário');

  return await db.task
    .update({ where: { id }, data })
    .then((res) => res)
    .catch(() => {
      throw new Error('Nenhuma tarefa foi encontrada');
    });
};
