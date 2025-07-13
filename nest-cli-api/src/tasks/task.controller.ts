import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.model';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('tasks')
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TaskService) {}

  @Get()
  @ApiResponse({ status: 200, description: 'List of users.' })
  getAll(): Task[] {
    return this.tasksService.getAllTasks();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'A user by ID.' })
  getOne(@Param('id') id: string): Task | undefined {
    return this.tasksService.getTaskById(Number(id));
  }

  @Post()
  @ApiResponse({ status: 201, description: 'Created a user.' })
  create(@Body() user: Task): Task {
    return this.tasksService.createTask(user);
  }
}
