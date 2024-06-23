import { HttpRequest, HttpResponse } from '../controllers/helpers/http';

type TaskProps = {
  macaddress: string;
  type: number;
  title: string;
  description: string;
  when: Date;
};

type TaskResponse = {
  id: string;
  macaddress: string;
  type: number;
  title: string;
  description: string;
  when: Date;
  done: boolean;
  created: Date;
};

interface ITaskController {
  create(
    params: HttpRequest<TaskProps>
  ): Promise<HttpResponse<TaskResponse | string>>;
}

interface ITaskService {
  create(data: TaskProps): Promise<TaskResponse>;
}

export { ITaskController, ITaskService, TaskProps, TaskResponse };
