const validation = require('../utility/validation');
const usermodel = require('../model/usermodel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
let config = require('../utility/config');


let userservice = {}


userservice.registerUser = async (newUser) => {
    validation.validateNewUser(newUser);
    newUser.password = await bcrypt.hash(newUser.password, 10);

    console.log(newUser);
    newUser = await usermodel.addUser(newUser);
    console.log(newUser);
    return newUser
}

userservice.verifyCredentials = async (email, password) =>{
    let user = await usermodel.getUserByEmail(email);
    console.log(password);
    console.log(user);
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


module.exports = userservice;