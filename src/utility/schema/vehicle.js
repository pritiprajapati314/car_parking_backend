let vehicle = {
    "vehicleId" : {
        type : Number,
        required: true,
        unique: true
    },
    "vehicleNumber" : {
        type : String,
        required : true,
        unique : true
    },
    "userId": {
        type : Number,
        required : true
    },
    "vehicleType": {
        type : String,
        required : true
    }
}

module.exports = vehicle;