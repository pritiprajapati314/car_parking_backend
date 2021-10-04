let parkingLot = {
    "parkingLotId" : {
        type : Number,
        unique : true,
        required : true
    },
    "OwnerId" : {
        type : Number,
        required : true
    },
    "NumberOFSlot" : {
        type : Number,
        required : true
    },
    "revenue" : {
        type : Number,
        required : true
    },
    "AddressID" : {
        type : String,
        required : true
    }
    //should i keep fees here or in parking slot
}

module.exports = parkingLot;
