let userCollection = require('../utility/dbconection');

let usermodel = {}

usermodel.addUser = async (newUser) => {
    let userModel = await userCollection.getUserModel();
    let insertedData = await userModel.create(newUser);
    
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

usermodel.getUserByEmail = async (email) => {
    let userModel = await userCollection.getUserModel();
    let data = await userModel.find({email: email});

    return data;
}

module.exports = usermodel;