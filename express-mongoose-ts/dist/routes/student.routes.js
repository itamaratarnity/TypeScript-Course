"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const student_model_1 = __importDefault(require("../models/student.model"));
const router = express_1.default.Router();
// Create student
router.post('/', async (req, res) => {
    try {
        const student = await student_model_1.default.create(req.body);
        res.status(201).json(student);
    }
    catch (err) {
        res.status(400).json({ error: err });
    }
});
// Get all students
router.get('/', async (_req, res) => {
    const students = await student_model_1.default.find();
    res.json(students);
});
exports.default = router;
//# sourceMappingURL=student.routes.js.map