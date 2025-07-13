"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logInfo = logInfo;
exports.logError = logError;
const winston_1 = require("winston");
const path_1 = __importDefault(require("path"));
const logger = (0, winston_1.createLogger)({
    level: 'info',
    format: winston_1.format.combine(winston_1.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), winston_1.format.printf(({ timestamp, level, message }) => {
        return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
    })),
    transports: [
        new winston_1.transports.Console(),
        new winston_1.transports.File({ filename: path_1.default.join('logs', 'app.log'), level: 'info' }),
        new winston_1.transports.File({ filename: path_1.default.join('logs', 'errors.log'), level: 'error' })
    ]
});
function logInfo(func, msg) {
    logger.info(`[${func}] ${msg}`);
}
function logError(func, msg) {
    logger.error(`[${func}] ${msg}`);
}
//# sourceMappingURL=logger.js.map