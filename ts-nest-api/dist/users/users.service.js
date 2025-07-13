"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
class UsersService {
    constructor() {
        this.users = [
            { id: 1, name: 'Alice', email: 'alice@mail.com' },
            { id: 2, name: 'Bob', email: 'bob@mail.com' },
        ];
    }
    findAll() {
        return this.users;
    }
    findOne(id) {
        return this.users.find(u => u.id === id);
    }
    create(user) {
        this.users.push(user);
        return user;
    }
}
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map