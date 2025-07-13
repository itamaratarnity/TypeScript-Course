"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const student_routes_1 = __importDefault(require("./routes/student.routes"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use('/students', student_routes_1.default);
mongoose_1.default.connect('mongodb://localhost:27017/school')
    .then(() => {
    console.log('📡 Connected to MongoDB');
    app.listen(port, () => console.log(`🚀 Server running on http://localhost:${port}`));
})
    .catch((err) => console.error('❌ MongoDB connection error:', err));
//# sourceMappingURL=index.js.map