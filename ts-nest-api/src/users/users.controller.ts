import { UsersService, User } from './users.service';

export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  findAll(): User[] {
    return this.usersService.findAll();
  }

  findOne(id: string): User | undefined {
    return this.usersService.findOne(Number(id));
  }

  create(user: User): User {
    return this.usersService.create(user);
  }
}
