const LogLevel = {
    INFO: {
        id: 1,
        name: "INFO",
        bgColor: "#19689B",
        bgColorTerminal: "\x1b[44m"
    },
    WARNING: {
        id: 2,
        name: "WARNING",
        bgColor: "#CF7E0F",
        bgColorTerminal: "\x1b[43m"
    },
    ERROR: {
        id: 3,
        name: "ERROR",
        bgColor: "#AF1B1B",
        bgColorTerminal: "\x1b[41m"
    },
    CRITICAL_ERROR: {
        id: 4,
        name: "CRITICAL ERROR",
        bgColor: "#AF1B1B",
        bgColorTerminal: "\x1b[41m"
    },
    SUCCESS: {
        id: 5,
        name: "SUCCESS",
        bgColor: "#167C43",
        bgColorTerminal: "\x1b[42m"
    },
    DEBUG: {
        id: 6,
        name: "DEBUG",
        bgColor: "#951D8A",
        bgColorTerminal: "\x1b[46m"
    },
    VERBOSE: {
        id: 7,
        name: "VERBOSE",
        bgColor: "#918D12",
        bgColorTerminal: "\x1b[45m"
    }
}

export default LogLevel;