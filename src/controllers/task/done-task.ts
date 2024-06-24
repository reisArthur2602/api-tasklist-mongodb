import { StatusCodes } from 'http-status-codes';
import { TaskResponse } from '../../models/TaskModel';
import { HttpRequest, HttpResponse } from '../helpers/http';
import { DoneTaskService } from '../../services/task/done-task';

export const DoneTaskController = async (
  params: HttpRequest<any>
): Promise<HttpResponse<TaskResponse | string>> => {
  try {
    const id = params.params.id as string;
    const done = params.params.done === "true";

    const task = await DoneTaskService(id, done);
    return { statusCode: StatusCodes.ACCEPTED, body: task };
  } catch (error: any) {
    return { statusCode: StatusCodes.NOT_FOUND, body: error.message };
  }
};
