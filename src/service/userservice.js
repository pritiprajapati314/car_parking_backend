const validation = require('../utility/validation');
const usermodel = require('../model/usermodel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
let config = require('../utility/config');
const user = require('../utility/schema/user');


//Priti : here the actual functionality (visible to the user) is defined using the model we declared
let userservice = {}


//Priti: register
//hashes the password
//then send the new object (user) to get stored in the database
//and gets back the data it has stored in the database 
userservice.registerUser = async (newUser) => {
    validation.validateNewUser(newUser);
    newUser.password = await bcrypt.hash(newUser.password, 10);
    newUser = await usermodel.addUser(newUser);
    return newUser
}


//Priti: here when user logins it will go through this
//verification stage where it check the password of the following email id and
//sends the token 
//@@@@@@Have to make another function to to verify token every time a servies is being requested
userservice.verifyCredentials = async (email, password) =>{
    let user = await usermodel.getUserByEmail(email);
    //encrpytpass = await bcrypt.hash(password, 10)
    if(user.length === 1){

        let match = bcrypt.compareSync(password, user[0].password);
        let token = "";
        if(match){
            token = jwt.sign(
                { user_id: user._id, email },
                config.TOKEN_KEY,
                {
                  expiresIn: "2h",
                })
        }

                

        
        return token;
    }else{
        let err = new Error(`User with email doesn't exist`);
        err.status = 500;
        throw err;
    }
}


//Priti : this function gets the the user by different attributes 
//userID, username, email
userservice.getUserBy = async (type, value) => {
    if(type === "userId"){
        data = await usermodel.getUserByUserId(value);
        return data
    }
    else if(type === "username"){
        data = await usermodel.getUserByUsername(value);
        return data
    }else if(type == "email"){
        data = await usermodel.getUserByEmail(value);
        return data
    }

    return data;

}


userservice.updateUser = async (value) => {
    
    let updatedUser = await usermodel.updateUser(value);
    if(updatedUser){
        return updatedUser;
    } 
    else return Error;
}


module.exports = userservice;