let parkingLot = {
    "parkingLotId" : {
        type : String,
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
        type : String
    }
}

module.exports = parkingLot;
