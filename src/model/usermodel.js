let userCollection = require('../utility/dbconection');


//Priti : below object will define carry all the function that to be used in the by the service along with 
//the logic at the time of execution 
let usermodel = {}


//Priti : the function get the data for the service (i.e, which is send by frontend) and it does
//the operations over these data with the connection function 
//already defined in the dbconnection file 
//here userCollection gets connection required to proceed 
usermodel.addUser = async (newUser) => {
    let userModel = await userCollection.getUserModel();
    
    let insertedData = await userModel.create(newUser);
    console.log(insertedData)
    if(insertedData){
        return insertedData;
    }else{
        let err = new Error("Error occured in adding user");
        err.status = 500;
        throw err;
    }
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

module.exports = usermodel;