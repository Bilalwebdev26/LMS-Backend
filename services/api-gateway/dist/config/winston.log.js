// import winston from "winston";
// export const winstonLogger = () => {
//   return winston.createLogger({
//     level: "info",
//     format: winston.format.json(),
//     defaultMeta: { service: "api-gateway" },
//   });
// };
import winston from 'winston';
// Custom log level colors define karo
winston.addColors({
  error: 'red bold',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'cyan',
});
export const logger = winston.createLogger({
  level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.errors({ stack: true }),
    winston.format.splat(),
    winston.format.json(),
  ),
  defaultMeta: { service: 'api-gateway' },
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize({ all: true }), // 👈 enable custom colors
        winston.format.printf(
          ({ level, message, timestamp, stack }) => `${timestamp} [${level}]: ${stack || message}`,
        ),
      ),
    }),
  ],
});
//# sourceMappingURL=winston.log.js.map
