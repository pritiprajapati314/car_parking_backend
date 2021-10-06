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

//Priti : we have to declare a schema in the format of mongoose
const schema = mongoose.Schema;

//Priti : connection with database getting and getting the url for the database after connection
//this will happend once for each time any service has been requested
const URL = 'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false';

//Priti : defining the attribute using the schema, collection for each database-collections
let userschema = new schema(user, {collection: "CAR_PARKING_USER", timestamps: true});
let ownerschema = new schema(owner, {collation: "CAR_PARKING_OWNER", timestamp: true});
let vehicleschema = new schema(vehicle, {collection: "CAR_PARKING_VEH", timestamps: true});
let parkLotschema = new schema(parkingLot, {collection: "CAR_PARKING_PL", timestamps: true});
let parkSlotschema = new schema(parkingSlot, {collection: "CAR_PARKING_PS", timestamps: true});
let slotTimeschema = new schema(slotTiming, {collection: "CAR_PARKING_ST", timestamps: true});

//Priti : this object contains all the function that is going to be later used in the 'model' 
//to insert, update, find and other operations
let connection = {}


//Priti : here connection for each collection is declared
//connection to url after parsing nad unifing to the already declared model 
//collection name, schema(final)
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