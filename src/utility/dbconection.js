const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const user = require('./schema/user');

const schema = mongoose.Schema;


const URL = 'mongodb://localhost:27017/CarParkingDB';

let userschema = new schema(user, {collection: "CAR_PARKING_USER", timestamps: true});

let connection = {}

connection.getUserModel = async() => {
    try{
        return (await mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true})).model("CAR_PARKING_USER", userschema);
    }catch(err){
        throw err;
    }
}

module.exports = connection;