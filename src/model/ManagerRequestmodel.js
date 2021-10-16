let ManagerRequestCollection = require('../utility/dbconection');



let ManagerRequestmodel = {} 

ManagerRequestmodel.addRequest = async (newRequest) => {
   
    let ManagerRequestmodel = await ManagerRequestCollection.getManagerRequestModel();
   
    let insertedData = await ManagerRequestmodel.create(newRequest);
    console.log(insertedData)
    if(insertedData){
        return insertedData;
    }else{
        let err = new Error("Error occured in adding user");
        err.status = 500;
        throw err;
    }
}
ManagerRequestmodel.getRequests= async () => {
    console.log("hi");
    let ManagerRequestmodel = await ManagerRequestCollection.getManagerRequestmodel();
    let data = await ManagerRequestmodel.find({});
    return data;
}


module.exports = ManagerRequestmodel;