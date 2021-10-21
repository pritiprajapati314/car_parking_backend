const validation = require('../utility/validation');
const ownermodel = require('../model/ownermodel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
let config = require('../utility/config');


//Priti : here the actual functionality (visible to the owner) is defined using the model we declared
let ownerservice = {}


ownerservice.registerOwner = async (newowner) => {
    
    await validation.validateNewOwner(newowner);
    console.log("validfation");
    newowner.password = await bcrypt.hash(newowner.password, 10);
    console.log("hi ")
    newowner = await ownermodel.addowner(newowner);
    return newowner
}



//Priti: here when owner logins it will go through this
//verification stage where it check the password of the following email id and
//sends the token 
//@@@@@@Have to make another function to to verify token every time a servies is being requested
ownerservice.verifyCredentials = async (email, password) =>{
    let owner = await ownermodel.getownerByEmail(email);
    //encrpytpass = await bcrypt.hash(password, 10)
    if(owner.length === 1){

        let match = bcrypt.compareSync(password, owner[0].password);
        let token = "";
        if(match){
            token = jwt.sign(
                { owner_id: owner._id, email },
                config.TOKEN_KEY,
                {
                  expiresIn: "2h",
                })
        }

                

        
        return token;
    }else{
        let err = new Error(`owner with email doesn't exist`);
        err.status = 500;
        throw err;
    }
}


//Priti : this function gets the the owner by different attributes 
//ownerID, ownername, email
ownerservice.getownerBy = async (type, value) => {
    if(type === "ownerId"){
        data = await ownermodel.getownerByownerId(value);
        return data
    }
    else if(type === "ownername"){
        data = await ownermodel.getownerByownername(value);
        return data
    }else if(type == "email"){
        data = await ownermodel.getownerByEmail(value);
        return data
    }

    return data;

}


module.exports = ownerservice;