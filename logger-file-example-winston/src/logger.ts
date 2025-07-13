import { createLogger, format, transports } from 'winston';
import path from 'path';

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.printf(({ timestamp, level, message }) => {
      return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
    })
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: path.join('logs', 'app.log'), level: 'info' }),
    new transports.File({ filename: path.join('logs', 'errors.log'), level: 'error' })
  ]
});

export function logInfo(func: string, msg: string) {
  logger.info(`[${func}] ${msg}`);
}

export function logError(func: string, msg: string) {
  logger.error(`[${func}] ${msg}`);
}