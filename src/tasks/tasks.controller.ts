import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
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

  @Get(':id')
  getTaskById(@Param('id') id: string): Task | string {
    return this.taskServices.getTaskById(id);
  }

  @Post()
  createNewTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.taskServices.createNewTask(createTaskDto);
  }
}
