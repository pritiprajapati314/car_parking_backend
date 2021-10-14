let userCollection = require('../utility/dbconection');
const { email } = require('../utility/schema/user');


//Priti : below object will define carry all the function that to be used in the by the service along with 
//the logic at the time of execution 
let usermodel = {}


//Priti : the function get the data for the service (i.e, which is send by frontend) and it does
//the operations over these data with the connection function 
//already defined in the dbconnection file 
//here userCollection gets connection required to proceed 
usermodel.addUser = async (newUser) => {
    let userModel = await userCollection.getUserModel();
    newUser.userId = await usermodel.generateUserId();
    let insertedData = await userModel.create(newUser);
    if(insertedData){
        return insertedData;
    }else{
        let err = new Error("Error occured in adding user");
        err.status = 500;
        throw err;
    }
}

usermodel.generateUserId = async() => {
    let userModel = await userCollection.getUserModel();
    let ids = await userModel.distinct("userId");
    let uId = Math.max(...ids);
    if(uId == -Infinity)return 1;
    return uId + 1;  
}

usermodel.getUserByUsername = async (username) => {
    let userModel = await userCollection.getUserModel();
    let data = await userModel.find({username: username});
    return data;
}

usermodel.getUserByUserId = async (userId) => {
    let userModel = await userCollection.getUserModel();
    let data = await userModel.find({userId: userId});
    return data;
}

usermodel.getUserByEmail = async (email) => {
    let userModel = await userCollection.getUserModel();
    let data = await userModel.find({email: email});
    return data;
}


usermodel.updateUser = async (value) => {
    let userModel = await userCollection.getUserModel();
    let data = await userModel.updateOne({email:value.email}, {$set:{address : value.address, pin : value.pin, contact : value.contact}})
    if(data){
        return data;
    }
    else return Error;
}

usermodel.deleteUser = async (value) => {
    let userModel = await userCollection.getUserModel();
    let data = await userModel.deleteOne({email : value.email});
    if(data){
        return data;
    }
    else{
        return Error;
    }
}

module.exports = usermodel;