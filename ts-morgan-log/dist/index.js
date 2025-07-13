"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
const port = 3000;
// שימוש ב־Morgan בלוג ברירת מחדל
app.use((0, morgan_1.default)('dev')); // אפשר גם 'tiny', 'combined' או פורמט מותאם אישית
// מסלול לדוגמה
app.get('/', (req, res) => {
    res.send('Hello Morgan Logger!');
});
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map