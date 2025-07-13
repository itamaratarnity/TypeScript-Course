import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const SECRET = 'my_secret_key';

export function generateToken(username: string): string {
  return jwt.sign({ username }, SECRET, { expiresIn: '1h' });
}

export function authenticateJWT(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (authHeader?.startsWith('Bearer ')) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, SECRET, (err, user) => {
      if (err) return res.status(403).send('Token invalid or expired');
      (req as any).user = user;
      next();
    });
  } else {
    res.status(401).send('Authorization header missing');
  }
}