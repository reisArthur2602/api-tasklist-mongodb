import { StatusCodes } from 'http-status-codes';
import { TaskResponse } from '../../../models/TaskModel';
import { HttpRequest, HttpResponse } from '../../helpers/http';
import { TodayTaskService } from '../../../services/task/filter-task/today-task';
import { isValidMACAddress } from '../../../utils/IsValidMACAddress';

export const TodayTaskController = async (
  params: HttpRequest<any>
): Promise<HttpResponse<TaskResponse[] | string>> => {
  try {
    const macaddress = params.params.macaddress as string;

    if (!isValidMACAddress(macaddress))
      return {
        statusCode: StatusCodes.BAD_REQUEST,
        body: 'Endereço MAC inválido',
      };

    const tasks = await TodayTaskService(macaddress);

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
