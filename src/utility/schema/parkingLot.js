let parkingLot = {
    "parkingLotId" : {
        type : Number,
        unique : true,
        required : true
    },
    "ownerId" : {
        type : Number,
        required : true
    },
    "numberOFSlot" : {
        type : Number,
        required : true
    },
    "revenue" : {
        type : Number,
        required : true
    },
    "addressID" : {
        type : String,
        required : true
    }
    //should i keep fees here or in parking slot
}

module.exports = parkingLot;
