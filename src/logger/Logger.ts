import * as fs from 'fs';

type LogLevel = 'INFO' | 'DEBUG' | 'WARN' | 'ERROR';

export class Logger {
  private static logFilePath = 'app.log';

  static log(level: LogLevel, message: string): void {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;

    fs.appendFile(Logger.logFilePath, logMessage, (err) => {
      if (err) {
        console.error(`Failed to write to log file: ${err.message}`);
      }
    });
  }
}

