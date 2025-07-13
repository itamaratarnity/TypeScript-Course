"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logger_1 = require("./logger");
const app = (0, express_1.default)();
const port = 3000;
app.use(logger_1.logger);
app.get('/', (_req, res) => {
    res.send('Hello Logger!');
});
app.listen(port, () => {
    console.log(`🚀 Server is running on http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map