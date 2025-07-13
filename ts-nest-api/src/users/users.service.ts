export interface User {
  id: number;
  name: string;
  email: string;
}

export class UsersService {
  private users: User[] = [
    { id: 1, name: 'Alice', email: 'alice@mail.com' },
    { id: 2, name: 'Bob', email: 'bob@mail.com' },
  ];

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User | undefined {
    return this.users.find(u => u.id === id);
  }

  create(user: User): User {
    this.users.push(user);
    return user;
  }
}
