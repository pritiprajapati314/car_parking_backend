let ManagerRequestCollection = require('../utility/dbconection');



let ManagerRequestmodel = {} 

ManagerRequestmodel.addRequest = async (newRequest) => {
    //console.log("i am here to haunt you for forever");
    let ManagerRequestModel = await ManagerRequestCollection.getManagerRequestModel();
    console.log(ManagerRequestModel, newRequest);
    let insertedData = await ManagerRequestModel.create(newRequest);
    console.log("insertData", insertedData)
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
    let ManagerRequestmodel = await ManagerRequestCollection.getManagerRequestModel();
    let data = await ManagerRequestmodel.find({});
    return data;
}


module.exports = ManagerRequestmodel;