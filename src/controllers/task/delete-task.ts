import { StatusCodes } from 'http-status-codes';
import { TaskProps, TaskResponse } from '../../models/TaskModel';
import { HttpRequest, HttpResponse } from '../helpers/http';
import { DeleteTaskService } from '../../services/task/delete-task';

export const DeleteTaskController = async (
  params: HttpRequest<any>
): Promise<HttpResponse<TaskResponse>> => {
  try {
    const id = params.params.id as string;
    const task = await DeleteTaskService(id);
    return { statusCode: StatusCodes.NOT_FOUND, body: task };
  } catch (error: any) {
    return { statusCode: StatusCodes.NOT_FOUND, body: error.message };
  }
};
