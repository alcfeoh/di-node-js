
class Logger {

    constructor(defaultMessage, defaultLogLevel = 'DEFAULT'){
        this.defaultMessage = defaultMessage;
        this.defaultLogLevel = defaultLogLevel;
    }

    log(message, level){
        message = message || this.defaultMessage;
        level = level || this.defaultLogLevel;
        switch (level) {
            case 'WARN':
                console.warn(message);
                break;
            case 'ERROR':
                console.error(message);
                break;
            default:
                console.log(message);
                break;
        }
    }
}

let logger = new Logger('Default message', 'DEFAULT');
let logger2 = new Logger('Different Default message', 'DEFAULT');

logger.log();
logger2.log();