const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const user = require('./schema/user');

const vehicle = require('./schema/vehicle');
const parkingLot = require('./schema/parkingLot');
const parkingSlot = require('./schema/parkingSlot');
const slotTiming = require('./schema/slotTiming');

const schema = mongoose.Schema;


const URL = 'mongodb://localhost:27017/CarParkingDB';

let userschema = new schema(user, {collection: "CAR_PARKING_USER", timestamps: true});

let vehicleschema = new schema(vehicle, {collection: "CAR_PARKING_USER", timestamps: true});
let parkLotschema = new schema(parkingLot, {collection: "CAR_PARKING_USER", timestamps: true});
let parkSlotschema = new schema(parkingSlot, {collection: "CAR_PARKING_USER", timestamps: true});
let slotTimeschema = new schema(slotTiming, {collection: "CAR_PARKING_USER", timestamps: true});

let connection = {}

connection.getUserModel = async() => {
    try{
        return (await mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true})).model("CAR_PARKING_USER", userschema);
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

module.exports = connection;