
let logger = {
    log: function(message, level = 'DEFAULT'){
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
};

logger.log('test', 'WARN');