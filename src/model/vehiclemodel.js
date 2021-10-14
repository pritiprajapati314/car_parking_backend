let vehicleCollection = require('../utility/dbconection');

let vehicleModel = {};
//what if user has two or more vehicles 
vehicleModel.addVehicle = async (newVehicle) => {
    console.log("hello");
    let collection = await vehicleCollection.getVehicleModel();
    
    newVehicle.vehicleId = await vehicleModel.generateVehicleId();
    let insertVehicle = await collection.create(newVehicle);
    console.log(insertVehicle);
    if(insertVehicle){
        return insertVehicle;
    }else{
        let err = new Error();
        err.message = "can't insert the data"
        return err;
    }
};

vehicleModel.generateVehicleId = async() => {
    let vehicleModel = await vehicleCollection.getVehicleModel()
    let ids = await vehicleModel.distinct("userId");
    let uId = Math.max(...ids);
    if(uId == -Infinity)return 1;
    return uId + 1;  
}



//to find the car records
vehicleModel.getVehicleById = async (vehicleId) => {
    let collection = await vehicleCollection.getVehicleModel();
    let findVehicle = await collection.find({vehicleId: vehicleId});
    if(findVehicle){
        return findVehicle;
    }else{
        let err = new Error();
        err.message = "vehicle not found"
        return err;
    }
};

vehicleModel.getVehicleByUserID = async (UserID) => {
    let collection = await vehicleCollection.getVehicleModel();
    let findVehicle = await collection.find({userId:UserID});
    if(findVehicle){
        return findVehicle;
    }else{
        let err = new Error();
        err.message = "vehicle not found"
        return err;
    }
};
module.exports = vehicleModel;