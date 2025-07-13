"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("./auth");
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === '1234') {
        const token = (0, auth_1.generateToken)(username);
        res.json({ token });
    }
    else {
        res.status(401).send('Invalid credentials');
    }
});
app.get('/protected', auth_1.authenticateJWT, (req, res) => {
    res.send(`Hello ${req.user.username}, you have access!`);
});
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map