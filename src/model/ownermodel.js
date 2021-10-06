let ownerCollection = require('../utility/dbconection');


let ownermodel = {}

ownermodel.addowner = async (newowner) => {
    //console.log("what's up people, how yo'll rotine")
    let connection = await ownerCollection.getOwnerModel();
    //console.log("how to get this thing workin", connection, newowner);
    console.log(newowner);
    let insertedData = await connection.create(newowner);
    console.log(insertedData)
    if(insertedData){
        return insertedData;
    }else{
        let err = new Error("Error occured in adding owner");
        err.status = 500;
        throw err;
    }
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