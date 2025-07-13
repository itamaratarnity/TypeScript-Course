"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = generateToken;
exports.authenticateJWT = authenticateJWT;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const SECRET = 'my_secret_key';
function generateToken(username) {
    return jsonwebtoken_1.default.sign({ username }, SECRET, { expiresIn: '1h' });
}
function authenticateJWT(req, res, next) {
    const authHeader = req.headers.authorization;
    if (authHeader?.startsWith('Bearer ')) {
        const token = authHeader.split(' ')[1];
        jsonwebtoken_1.default.verify(token, SECRET, (err, user) => {
            if (err)
                return res.status(403).send('Token invalid or expired');
            req.user = user;
            next();
        });
    }
    else {
        res.status(401).send('Authorization header missing');
    }
}
//# sourceMappingURL=auth.js.map