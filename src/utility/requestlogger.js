const fs = require('fs');

const requestLogger = (req, res, next) => {
    try{
        let logMessage = `${new Date().toTimeString()} - ${req.method} : ${req.url} `;
        console.log(logMessage);
        next();
    }catch(err){
        next(err);
    }

}

module.exports = requestLogger;