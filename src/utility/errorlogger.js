const fs = require('fs');

const errorLogger = (err, req, res, next) => {
    if(err){
        let logMessage = `${new Date().toTimeString()} - ${err.message} `;

        console.log(logMessage);
    }

    next();
}

module.exports = errorLogger;