import { User } from '../models/user.model';

let users: User[] = [
  { id: 1, name: 'Alice', email: 'alice@email.com' },
  { id: 2, name: 'Bob', email: 'bob@email.com' },
];

export const getAllUsers = (): User[] => users;

export const getUserById = (id: number): User | undefined =>
  users.find(user => user.id === id);

export const createUser = (user: User): User => {
  users.push(user);
  return user;
};
