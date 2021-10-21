let ownerCollection = require('../utility/dbconection');


let ownermodel = {}

ownermodel.addowner = async (newOwner) => {
    console.log("hello")
    let ownerModel = await ownerCollection.getOwnerModel();
    console.log("got the model",ownerModel)
    newOwner.ownerId = await ownermodel.generateId();

    let insertedData = await ownerModel.create(newOwner);
    if(insertedData){
        return insertedData;
    }else{
        let err = new Error("Error occured in adding user");
        err.status = 500;
        throw err;
    }
}

ownermodel.generateId = async() => {

    let ownerModel = await ownerCollection.getOwnerModel();
    let ids = await ownerModel.distinct("ownerId");
    let uId = Math.max(...ids);
    if(uId == -Infinity)return 1;
    console.log(uId);
    return uId + 1;  
}

ownermodel.getownerByownername = async (ownername) => {
    let ownerModel = await ownerCollection.getOwnerModel();
    let data = await ownerModel.find({ownername: ownername});
    return data;
}

ownermodel.getownerByownerId = async (ownerId) => {
    let ownerModel = await ownerCollection.getOwnerModel();
    let data = await ownerModel.find({ownerId: ownerId});
    return data;
}

ownermodel.getownerByEmail = async (email) => {
    let ownerModel = await ownerCollection.getOwnerModel();
    let data = await ownerModel.find({email: email});
    return data;
}

module.exports = ownermodel;