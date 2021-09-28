let parkingLot = {
    "parkingLotId" : {
        type : Number,
        unique : true,
        required : true
    },
    "OwnerId" : {
        type : Number,
        required : true
    }
    //should i keep fees here or in parking slot
}

module.exports = parkingLot;
