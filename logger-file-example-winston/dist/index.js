"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logger_1 = require("./logger");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const logDir = path_1.default.join(__dirname, '..', 'logs');
if (!fs_1.default.existsSync(logDir))
    fs_1.default.mkdirSync(logDir);
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (_req, res) => {
    (0, logger_1.logInfo)('GET /', 'Homepage accessed');
    res.send('Logger is working!');
});
app.get('/error', (_req, res) => {
    try {
        fs_1.default.readFileSync('non-existent-file.txt');
    }
    catch (e) {
        (0, logger_1.logError)('GET /error', e.message);
        res.status(500).send('An error occurred!');
    }
});
app.listen(port, () => {
    (0, logger_1.logInfo)('Server', `Listening on http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map