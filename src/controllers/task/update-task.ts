import { StatusCodes } from 'http-status-codes';
import { TaskProps, TaskResponse } from '../../models/TaskModel';
import { HttpRequest, HttpResponse } from '../helpers/http';
import { TaskSchema } from '../../utils/validator/taskSchema';
import { UpdateTaskService } from '../../services/task/update-task';

export const UpdateTaskController = async (
  params: HttpRequest<TaskProps>
): Promise<HttpResponse<TaskResponse | string>> => {
  try {
    const { data, error } = TaskSchema.safeParse(params.body);
    const id = params.params.id as string;
    if (error)
      return {
        statusCode: StatusCodes.BAD_REQUEST,
        body: 'Preencha os dados corretamente',
      };

    const task = await UpdateTaskService(id, data);
    return { statusCode: StatusCodes.ACCEPTED, body: task };
  } catch (error: any) {
    return { statusCode: StatusCodes.BAD_REQUEST, body: error.message };
  }
};
