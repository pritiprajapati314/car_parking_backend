const express = require('express');
let User = require('../entity/user');
const ownerrouter = express.Router();
const ownerservice = require('../service/userservice');
const loginutil = require('../utility/loginutil');


userrouter.post('/register', async (req, res, next)=>{
    try{
        let newuser = new User(req.body);
        console.log(newuser);

        newuser.userId = 778;
        let idStatus = await userservice.getUserBy("userId", newuser.userId);
        let emailStatus = await userservice.getUserBy("email", newuser.email);
        console.log("what's wrong");
        if(idStatus.length != 0)throw("user id already exists")
        if(emailStatus.length != 0)throw("Email id already exists")
       
        if(!newuser.gender)throw("please enter your gender")
        if(newuser.password != req.body.cPassword)throw("confirm password should be same as password")
        console.log("choke")
        newuser = await userservice.registerUser(newuser);
        console.log("retured value", newuser)
    }catch(err){
        res.json({message: err})
    }
});


userrouter.get('/get-user/:username', loginutil.verifyToken, async(req, res, next) =>{
    try{
        let username = req.params.username;
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