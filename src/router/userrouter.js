const express = require('express');
let User = require('../entity/user');
const userrouter = express.Router();
const userservice = require('../service/userservice');
const loginutil = require('../utility/loginutil');
/* const { password, username } = require('../utility/schema/user');
const user = require('../utility/schema/user');
 */
 
//Priti : here the router for user is defined
//here all the displayed features is being defined using services function defined in services file
//login, register, get user


userrouter.post('/login', async (req, res, next) => {
    
    const {email, password} = req.body;
    
    let token = await userservice.verifyCredentials(email, password);
    res.json({token: token});
});



userrouter.post('/register', async (req, res, next)=>{
    try{
        let newuser = new User(req.body);
        
        let idStatus = await userservice.getUserBy("userId", newuser.userId);
        let emailStatus = await userservice.getUserBy("email", newuser.email);
    
        if(idStatus.length != 0)throw("user id already exists")
        if(emailStatus.length != 0)throw("Email id already exists")
       
        if(!newuser.gender)throw("please enter your gender")

        if(newuser.password != newuser.cpassword)throw("confirm password should be same as password")
        
        newuser = await userservice.registerUser(newuser);
        res.json("Registration Successfull");
    
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