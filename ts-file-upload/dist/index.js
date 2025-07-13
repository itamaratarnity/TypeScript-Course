"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fileRouter_1 = __importDefault(require("./routes/fileRouter"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
// שימוש ב- Router
app.use('/api', fileRouter_1.default);
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map