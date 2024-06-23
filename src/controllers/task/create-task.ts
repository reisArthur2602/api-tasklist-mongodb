import { StatusCodes } from 'http-status-codes';
import { CreateTaskService } from '../../services/task/create-task';
import { HttpRequest, HttpResponse } from '../helpers/http';
import { TaskProps, TaskResponse } from '../../models/TaskModel';
import { TaskSchema } from '../../utils/validator/taskSchema';

export const CreateTaskController = async (
  params: HttpRequest<TaskProps>
): Promise<HttpResponse<TaskResponse | string>> => {
  try {
    const { data, error } = TaskSchema.safeParse(params.body);
    if (error)
      return {
        statusCode: StatusCodes.BAD_REQUEST,
        body: 'Preencha os dados corretamente',
      };

    const task = await CreateTaskService(data);
    return { statusCode: StatusCodes.CREATED, body: task };
  } catch (error: any) {
    return {
      statusCode: StatusCodes.CONFLICT,
      body: error.message,
    };
  }
};
