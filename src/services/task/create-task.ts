import { TaskProps, TaskResponse } from '../../models/TaskModel';
import { db } from '../../db/prisma';
import { isPast } from 'date-fns';

export const CreateTaskService = async (
  data: TaskProps
): Promise<TaskResponse> => {
  const filter = {
    ...(data.macaddress
      ? { when: data.when, macaddress: data.macaddress }
      : { when: data.when, isGuest: true }),
  };

  if (isPast(data.when)) throw new Error('Escolha uma data e hora no futuro');

  const existsTask = await db.task.findFirst({
    where: filter,
  });

  if (existsTask) throw new Error('Já existe uma tarefa neste dia e horário');

  return await db.task
    .create({ data: { ...data, isGuest: data.macaddress ? false : true } })
    .then((task) => task)
    .catch(() => {
      throw new Error('Erro ao criar tarefa');
    });
};
