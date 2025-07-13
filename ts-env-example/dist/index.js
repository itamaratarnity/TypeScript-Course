"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const port = process.env.PORT || 5000;
const appName = process.env.APP_NAME || 'Default App';
const debug = process.env.DEBUG === 'true';
console.log(`🚀 Starting ${appName} on port ${port}`);
if (debug) {
    console.log("🛠 Debug mode is ON");
}
//# sourceMappingURL=index.js.map