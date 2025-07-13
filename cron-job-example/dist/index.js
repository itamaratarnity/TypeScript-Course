"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_cron_1 = __importDefault(require("node-cron"));
// כל דקה
node_cron_1.default.schedule('* * * * *', () => {
    console.log(`[${new Date().toLocaleTimeString()}] המשימה רצה כל דקה`);
});
// כל יום ב-9:00 בבוקר
node_cron_1.default.schedule('0 9 * * *', () => {
    console.log(`[${new Date().toLocaleTimeString()}] שליחת מייל יומית`);
});
// כל 10 שניות
setInterval(() => {
    console.log(`[${new Date().toLocaleTimeString()}] פעולה חוזרת כל 10 שניות`);
}, 10000);
//# sourceMappingURL=index.js.map