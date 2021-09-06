const express = require('express');
let User = require('../entity/user');
const userrouter = express.Router();
const userservice = require('../service/userservice');


userrouter.post('/login', (req, res, next) => {
    console.log("Here")
    res.send("Login route").status(200);
    res.end();
});

userrouter.post('/register', async (req, res, next)=>{
    try{
        //res.send("Register Route");
        let newuser = new User(req.body);

        res.send(await userservice.registerUser(newuser));
        res.status(200).end();
    }catch(err){
        next(err);
    }

});

module.exports = userrouter;