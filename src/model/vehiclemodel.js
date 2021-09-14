let vehicleCollection = require('../utility/dbconection');

let vehicleMod = {};

vehicleMod.addVehicle = async (newVehicle) => {
    let collection = await vehicleCollection.getVehicleModel();
    let insertVehicle = await collection.create(newVehicle);
    if(insertVehicle){
        return insertVehicle;
    }else{
        let err = new Error();
        err.message = "can't insert the data"
        return err;
    }
};

vehicleMod.getVehicleById = async (vehicleId) => {
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

vehicelMod.getVehicleByUserID = async (UserID) => {
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

module.exports = vehicelMod;