const winston = require("winston");
const path = require("path");
const time = () => (new Date().toISOString());

const errorlog = winston.createLogger({
    transports: [
        new winston.transports.File({
            filename: path.join(__dirname, 'logfile', 'error.log'), 
            timestamp: time,
            level: "info",
        }),
    ]
});

const accesslog = winston.createLogger({
    transports: [
        new winston.transports.File({
            filename: path.join(__dirname, 'logfile', 'access.log'), 
            timestamp: time,
            level: "info",
        }),
    ]
});

module.exports = {
    errorlog: errorlog,
    accesslog: accesslog,
};