const express = require('express');
let User = require('../entity/user');
const userrouter = express.Router();
const userservice = require('../service/userservice');
const loginutil = require('../utility/loginutil');


userrouter.post('/login', async (req, res, next) => {
    console.log("Here")
    const {email, password} = req.body;

    let token = await userservice.verifyCredentials(email, password);
    res.json({token: token});
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


userrouter.get('/get-user/:username', loginutil.verifyToken, async(req, res, next) =>{
    try{
        let username = req.params.username;
        //console.log(username);
        
        let user = await userservice.getUserBy("username", username);

        if(user){
            res.json({user: user});
        }else{
            res.json({notFound: 'user not found'});
        }

    }catch(err){
        next(err);
    }
});

module.exports = userrouter;