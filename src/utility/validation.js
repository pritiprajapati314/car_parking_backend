const usermodel = require("../model/usermodel");
const ownermodel = require("../model/ownermodel");


let validation = {}

validation.validateNewUser = async (newUser) =>{

    console.log(newUser);
    let validationReport = {};
    let validationErrors = {};

    if(newUser.password && newUser.cpassword && newUser.cpassword === newUser.password){
    }else{
        validationErrors.passwordError = "Password and confirm password empty and(or) donot match";
        return validationErrors;
    }
    console.log(newUser);
    if(newUser.email){
        let user = await usermodel.getUserByEmail(newUser.email);
        console.log("user", user);
        if(user){
            validationErrors.emailError = "Email already in use."
            return validationErrors;
        }
    }else{
        validationErrors.emailError = "Email cannot be empty";
        return validationErrors;
    }

    if(newUser.dateOfBirth){
    }else{
        validationErrors.dateOfBirth = "Date of birth cannot be empty";
        return validationErrors;
    }

    return newUser;
}

validation.validateNewOwner = async (newUser) =>{
    let validationReport = {};
    let validationErrors = {};

    console.log(newUser);
    if(newUser.email){
        let user = await ownermodel.getownerByEmail(newUser.email);
        console.log("user", user);
        if(user.length){
            validationErrors.emailError = "Email already in use."
            return validationErrors;
        }
    }else{
        validationErrors.emailError = "Email cannot be empty";
        return validationErrors;
    }

    if(newUser.dateOfBirth){
    }else{
        validationErrors.dateOfBirth = "Date of birth cannot be empty";
        return validationErrors;
    }
    console.log("hello i am about to return");
    return;
}

module.exports = validation;