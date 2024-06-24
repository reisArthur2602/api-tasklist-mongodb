import { StatusCodes } from 'http-status-codes';
import { TaskResponse } from '../../../models/TaskModel';
import { HttpRequest, HttpResponse } from '../../helpers/http';
import { AllTaskService } from '../../../services/task/filter-task/all-task';

export const AllTaskController = async (
  params: HttpRequest<any>
): Promise<HttpResponse<TaskResponse[] | string>> => {
  try {
    const macaddress = params.params.macaddress as string;

    const tasks = await AllTaskService(macaddress);

    return {
      statusCode: StatusCodes.ACCEPTED,
      body: tasks,
    };
  } catch (error: any) {
    return {
      statusCode: StatusCodes.NOT_FOUND,
      body: error.message,
    };
  }
};
