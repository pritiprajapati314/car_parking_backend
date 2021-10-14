const usermodel = require("../model/usermodel");


let validation = {}

validation.validateNewUser = (newUser) =>{
    let validationReport = {};
    let validationErrors = {};
    if(newUser.password && newUser.cpassword && newUser.cpassword === newUser.password){
    }else{
        validationErrors.passwordError = "Password and confirm password empty and(or) donot match";
        return validationErrors;
    }
    /* if(newUser.username){
        let user = usermodel.getUserByUsername(newUser.username);
        if(user){
            validationErrors.usernameError = "username already exists"
            return validationErrors;
        }
    }else{
        validationErrors.usernameError = "Username cannot be empty";
        return validationErrors;
    } */

    if(newUser.email){
        let user = usermodel.getUserByEmail(newUser.email);
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

module.exports = validation;