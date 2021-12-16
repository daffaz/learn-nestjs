import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  createNewTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;
    const newTask: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(newTask);
    return newTask;
  }

  getTaskById(id: string): Task | string {
    const result = this.getTask(id);
    return result;
  }

  deleteTaskById(id: string): Task | string {
    const result = this.getTask(id);
    if (typeof result !== 'string') {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    }
    return result;
  }

  private getTask(id: string): Task | string {
    const result = this.tasks.find((task) => task.id === id);

    return result !== undefined ? result : `Tasks with id ${id} not found`;
  }
}
