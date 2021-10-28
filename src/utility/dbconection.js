const mongoose = require('mongoose');
mongoose.Promise = global.Promise;


//Priti : accessing the schema and storing it as variables
//just to avoid redundance and to store date in the same format
const user = require('./schema/user');
const owner = require('./schema/owner');
const vehicle = require('./schema/vehicle');
const parkingLot = require('./schema/parkingLot');
const parkingSlot = require('./schema/parkingSlot');
const slotTiming = require('./schema/slotTiming');
const managerRequest = require('./schema/ManagerRequest')
const bookingSearch = require('./schema/BookingSearch');
//Priti : we have to declare a schema in the format of mongoose
const schema = mongoose.Schema;


const URL = 'mongodb://localhost:27017/ParkingLotDB';

let userschema = new schema(user, {collection: "CAR_PARKING_USER", timestamps: true});
let ownerschema = new schema(owner, {collection: "CAR_PARKING_OWNER", timestamps: true});
let vehicleschema = new schema(vehicle, {collection: "CAR_PARKING_VEH", timestamps: true});
let parkLotschema = new schema(parkingLot, {collection: "CAR_PARKING_PL", timestamps: true});
let parkSlotschema = new schema(parkingSlot, {collection: "CAR_PARKING_PS", timestamps: true});
let slotTimeschema = new schema(slotTiming, {collection: "CAR_PARKING_ST", timestamps: true});
let managerRequestschema = new schema(managerRequest,{collection:"CAR_PARKING_MR",timestamps: true});
let bookingschema = new schema(bookingSearch, {collection: "CAR_PARKING_BR", timestamps: true});
let connection = {}



connection.getUserModel = async() => {
    try{
        
        return (await mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true})).model("CAR_PARKING_USER", userschema);
    }catch(err){
        throw err;
    }
}

connection.getOwnerModel = async() => {
    try{
        return (await mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true})).model("CAR_PARKING_OWNER", ownerschema);
    }catch(err){
        throw err;
    }
}

connection.getVehicleModel = async() => {
    try{
        return (await mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true})).model("CAR_PARKING_VEH", vehicleschema);
    }catch(err){
        throw err;
    }
}

connection.getPLotModel = async() => {
    try{
        return (await mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true})).model("CAR_PARKING_PL", parkLotschema);
    }catch(err){
        throw err;
    }
}

connection.getPSlotModel = async() => {
    try{
        console.log("hello i am mister nobody");
        return (await mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true})).model("CAR_PARKING_PS", parkSlotschema);
    }catch(err){
        throw err;
    }
}

connection.getSTimeModel = async() => {
    try{
        return (await mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true})).model("CAR_PARKING_ST", slotTimeschema);
    }catch(err){
        throw err;
    }
}
connection.getManagerRequestModel = async() => {
    try{
        return (await mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true})).model("CAR_PARKING_MR",managerRequestschema);
    }catch(err){
        throw err;
    }
}
connection.getBookingSearchModel = async() => {
    try{
        return (await mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true})).model("CAR_PARKING_BR",bookingschema);
    }catch(err){
        throw err;
    }
}
module.exports =  managerRequestschema;
module.exports = connection;