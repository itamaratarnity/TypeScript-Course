"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    findAll() {
        return this.usersService.findAll();
    }
    findOne(id) {
        return this.usersService.findOne(Number(id));
    }
    create(user) {
        return this.usersService.create(user);
    }
}
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map