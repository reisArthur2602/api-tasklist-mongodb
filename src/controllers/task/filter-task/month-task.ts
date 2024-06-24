import { StatusCodes } from 'http-status-codes';
import { TaskResponse } from '../../../models/TaskModel';
import { HttpRequest, HttpResponse } from '../../helpers/http';
import { MonthTaskService } from '../../../services/task/filter-task/month-task';
import { isValidMACAddress } from '../../../utils/isValidMACAddress';


export const MonthTaskController = async (
  params: HttpRequest<any>
): Promise<HttpResponse<TaskResponse[] | string>> => {
  try {
    const macaddress = params.params.macaddress as string;

    if (macaddress) {
      const isValid = isValidMACAddress(macaddress);
      if (!isValid)
        return {
          statusCode: StatusCodes.BAD_REQUEST,
          body: 'Endereço MAC inválido',
        };
    }

    const tasks = await MonthTaskService(macaddress);

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
