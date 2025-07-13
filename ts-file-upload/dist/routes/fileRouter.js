"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const router = (0, express_1.Router)();
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => {
        const id = Date.now().toString();
        const ext = path_1.default.extname(file.originalname);
        cb(null, `${id}${ext}`);
    }
});
const upload = (0, multer_1.default)({ storage });
router.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        res.status(400).json({ error: 'No file uploaded' });
        return;
    }
    const id = path_1.default.parse(req.file.filename).name;
    res.json({
        message: 'File uploaded successfully',
        id,
        filename: req.file.filename
    });
});
router.get('/files/:id', (req, res) => {
    const id = req.params.id;
    const uploadsDir = path_1.default.resolve('uploads');
    fs_1.default.readdir(uploadsDir, (err, files) => {
        if (err)
            return res.status(500).send('Server error');
        const fileName = files.find(f => path_1.default.parse(f).name === id);
        if (!fileName)
            return res.status(404).send('File not found');
        const filePath = path_1.default.join(uploadsDir, fileName);
        res.sendFile(filePath);
    });
});
exports.default = router;
//# sourceMappingURL=fileRouter.js.map