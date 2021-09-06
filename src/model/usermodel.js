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

module.exports = usermodel;