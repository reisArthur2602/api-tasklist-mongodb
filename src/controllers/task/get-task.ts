import { StatusCodes } from 'http-status-codes';
import { TaskResponse } from '../../models/TaskModel';
import { HttpRequest, HttpResponse } from '../helpers/http';
import { GetTaskService } from '../../services/task/get-task';

export const GetTaskController = async (
  params: HttpRequest<any>
): Promise<HttpResponse<TaskResponse | string>> => {
  try {
    const id = params.params.id;
    const task = await GetTaskService(id);
    return { statusCode: StatusCodes.ACCEPTED, body: task };
  } catch (error: any) {
    return { statusCode: StatusCodes.NOT_FOUND, body: error.message };
  }
};
