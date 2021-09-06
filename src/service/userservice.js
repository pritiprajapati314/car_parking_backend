const validation = require('../utility/validation');
const usermodel = require('../model/usermodel');

let userservice = {}


userservice.registerUser = async (newUser) => {
    validation.validateNewUser(newUser);

    return await usermodel.addUser(newUser);
}


module.exports = userservice;