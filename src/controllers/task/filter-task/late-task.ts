import { StatusCodes } from 'http-status-codes';
import { HttpRequest, HttpResponse } from '../../helpers/http';
import { TaskResponse } from '../../../models/TaskModel';
import { LateTaskService } from '../../../services/task/filter-task/late-task';
import { isValidMACAddress } from '../../../utils/IsValidMACAddress';

export const LateTaskController = async (
  params: HttpRequest<any>
): Promise<HttpResponse<TaskResponse[] | string>> => {
  try {
    const macaddress = params.params.macaddress as string;

    if (!isValidMACAddress(macaddress))
      return {
        statusCode: StatusCodes.BAD_REQUEST,
        body: 'Endereço MAC inválido',
      };

    const tasks = await LateTaskService(macaddress);

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
