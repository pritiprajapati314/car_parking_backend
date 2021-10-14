let jwt = require('jsonwebtoken');
let config = require('./config');

loginUtil = {}

loginUtil.verifyToken = (req, res, next) => {
    let token; 
    try{
        token = req.headers["x-access-token"];
    }catch(err){

    }


    if(!token){
        let err = new Error('No token provided');
        err.status = 403
        throw err;
    }
    try{
        const decoded = jwt.verify(token, config.TOKEN_KEY);
        req.user = decoded;
    }catch(err){
        return res.status(401).send("Invalid Token");
    }

    return next();
}

module.exports = loginUtil;