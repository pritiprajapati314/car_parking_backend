const validation = require('../utility/validation');
const usermodel = require('../model/usermodel');
const { vehicle } = require('../utility/schema/user');
const vehicleModel = require('../model/vehiclemodel');

const vehicleservice = {};

vehicleservice.registerVehicle = async(newVehicle) => {
    //we can make vehicle as vehicle-type followed by vehicle-number followed by ownerid seperated by '/'
    //for now it is just vehicle number
    console.log("hello");
    newVehicle.vehicleType = "Bike";
    newVehicle = await vehicleModel.addVehicle(newVehicle);
}


module.exports = vehicleservice;