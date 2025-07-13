"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_controller_1 = require("./users/users.controller");
const users_service_1 = require("./users/users.service");
const userService = new users_service_1.UsersService();
const userController = new users_controller_1.UsersController(userService);
console.log("GET /users ->", userController.findAll());
console.log("GET /users/1 ->", userController.findOne("1"));
console.log("POST /users ->", userController.create({ id: 3, name: "Charlie", email: "charlie@mail.com" }));
//# sourceMappingURL=main.js.map