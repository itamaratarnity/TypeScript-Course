"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
const port = 3000;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const accessLogStream = fs_1.default.createWriteStream(path_1.default.join(__dirname, 'access.log'), { flags: 'a' });
app.use((0, morgan_1.default)('combined', { stream: accessLogStream }));
// שימוש ב־Morgan בלוג ברירת מחדל
app.use((0, morgan_1.default)(':method :url :status :response-time ms'));
// מסלול לדוגמה
app.get('/', (req, res) => {
    res.send('Hello Morgan Logger!');
});
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
//# sourceMappingURL=main.js.map