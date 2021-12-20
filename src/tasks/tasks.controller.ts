import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTaskWithFilterDto } from './dto/get-task-with-filter.dto';
import { Task, TaskStatus } from './tasks.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  private taskServices: TasksService;

  constructor(taskServices: TasksService) {
    this.taskServices = taskServices;
  }

  @Get()
  getAllTasks(@Query() filterDto: GetTaskWithFilterDto): Task[] {
    if (Object.keys(filterDto).length) {
      return this.taskServices.getAllTaskWithFilter(filterDto);
    } else {
      return this.taskServices.getAllTasks();
    }
  }

  @Get(':id')
  getTaskById(@Param('id') id: string): Task | string {
    return this.taskServices.getTaskById(id);
  }

  @Post()
  createNewTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.taskServices.createNewTask(createTaskDto);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string): string {
    this.taskServices.deleteTaskById(id);
    return `${id} deleted`;
  }

  @Patch(':id/status')
  updateTaskById(
    @Param('id') id: string,
    @Body('status') status: TaskStatus,
  ): Task | string {
    return this.taskServices.updateTaskStatus(id, status);
  }
}
