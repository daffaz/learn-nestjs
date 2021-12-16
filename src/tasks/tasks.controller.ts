import { Controller, Get, Post } from '@nestjs/common';
import { Task } from './tasks.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  private taskServices: TasksService;

  constructor(taskServices: TasksService) {
    this.taskServices = taskServices;
  }

  @Get()
  getAllTasks(): Task[] {
    return this.taskServices.getAllTasks();
  }

  @Post()
  createNewTask(): Task {
    return this.taskServices.createNewTask('Wawan', 'Wawan the fat cat');
  }
}
