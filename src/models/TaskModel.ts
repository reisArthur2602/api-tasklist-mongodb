import { Task } from "@prisma/client";

enum TypesTask {
  'code',
  'work',
  'study',
  'gym',
  'food',
  'people',
  'travel',
}

type TaskProps = {
  macaddress?: string;
  type: 'code' | 'work' | 'study' | 'gym' | 'food' | 'people' | 'travel';
  title: string;
  description: string;
  when: Date;
};

type TaskResponse = {
  id: string;
  macaddress: string | null;
  type: string;
  title: string;
  description: string;
  when: Date;
  done: boolean;
  isGuest: boolean;
  created: Date;
};




export { TaskProps, TaskResponse };
