import { db } from '../../db/prisma';
import { TaskProps } from '../../models/TaskModel';

export const UpdateTaskService = async (id: string, data: TaskProps) => {
  const existsDate = await db.task.findFirst({
    where: { id: { not: id }, when: data.when, macaddress: data.macaddress },
  });

  if (existsDate) throw new Error('Já existe uma tarefa neste dia e horário');

  return await db.task
    .update({ where: { id }, data })
    .then((res) => res)
    .catch(() => {
      throw new Error('Nenhuma tarefa foi encontrada');
    });
};
