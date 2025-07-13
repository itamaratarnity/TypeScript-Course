import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.model';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @ApiResponse({ status: 200, description: 'List of users.' })
  getAll(): User[] {
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'A user by ID.' })
  getOne(@Param('id') id: string): User | undefined {
    return this.usersService.getUserById(Number(id));
  }

  @Post()
  @ApiResponse({ status: 201, description: 'Created a user.' })
  create(@Body() user: User): User {
    return this.usersService.createUser(user);
  }
}
