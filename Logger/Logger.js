import LogLevel from "./LogLevel.js";

export default class Logger {
    sendLog(logLevel, msg) {
        if (typeof window === 'undefined')
            console.log(logLevel.bgColorTerminal, logLevel.name, "\x1b[0m", msg);
        else
            console.log(`%c ${logLevel.name} %c ${msg}`, `background-color: ${logLevel.bgColor}; color: #FFF; font-weight: bold`, `background-color: inherit; color: inherit`)
    }

    sendCriticalError(msg) {
        this.sendLog(LogLevel.CRITICAL_ERROR, msg);
        process.exit;
    }
}