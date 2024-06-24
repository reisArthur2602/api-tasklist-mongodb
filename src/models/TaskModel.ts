

type TaskProps = {
  macaddress?: string;
  type: number;
  title: string;
  description: string;
  when: Date;
};

type TaskResponse = {
  id: string;
  macaddress: string | null;
  type: number;
  title: string;
  description: string;
  when: Date;
  done: boolean;
  isGuest: boolean;
  created: Date;
};

export { TaskProps, TaskResponse };
