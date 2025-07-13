import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';

const userService = new UsersService();
const userController = new UsersController(userService);

console.log("GET /users ->", userController.findAll());
console.log("GET /users/1 ->", userController.findOne("1"));
console.log("POST /users ->", userController.create({ id: 3, name: "Charlie", email: "charlie@mail.com" }));
