const express = require('express');
const userrouter = express.Router();

let User = require('../entity/user');
let Vehicle = require('../entity/vehicle');

const userservice = require('../service/userservice');
const vehicleservice = require('../service/vehicleService');

const loginutil = require('../utility/loginutil');


userrouter.post('/login', async (req, res, next) => {
    
    const {email, password} = req.body;
    
    let user = await userservice.getUserBy("email", email);
    let token = await userservice.verifyCredentials(email, password);
    
    console.log(user);
    res.json({user: user[0], token: token});
});



userrouter.post('/register', async (req, res, next)=>{
    try{
        let newuser = new User(req.body);
        let newvehicle = new Vehicle(req.body);

        newuser = await userservice.registerUser(newuser);

        newvehicle.userId = newuser.userId;
        newvehicle = vehicleservice.registerVehicle(newvehicle);
        
        res.json("Registration Successfull");
    
    }catch(err){
        res.json({message: err})
    }
});



userrouter.post('/profile/update', loginutil.verifyToken, async(req, res, next) => {

    try{
        let updateduser = new User(req.body);
       
        updateduser = await userservice.updateUser(updateduser);
        if(updateduser){
            res.json({user: updateduser});
        }
        else {
            res.json({notFound: 'user not found'});
        }
    }
    catch(err){
        next(err);
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

userrouter.post('/bookSlot', async(req, res, next) => {
    try{
        let R = 6371 // km
        let lat1 = 21.8306151
        let lon1 = 80.1870315
        let lat2 = req.body.latitude;
        let lon2 = req.body.longitude;
        let p = Math.PI/180
        let a = 0.5 - Math.cos((lat2-lat1)*p)/2 + Math.cos(lat1*p) * Math.cos(lat2*p) * (1-Math.cos((lon2-lon1)*p))/2;
        let dis = 12742 * Math.asin(Math.sqrt(a));
        console.log(dis);
    }
    catch(err){
        next(err);
    }
})


module.exports = userrouter;