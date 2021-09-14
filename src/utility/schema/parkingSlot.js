let parkingSlot = {
    "slotId" : {
        type : Number,
        Unique : true,
        Required : true
    },
    "ParkingLotId" : {
        type : Number,
        Required : true
    },
    "OwnerID" : {
        type : Number,
        Required : true,
    },
    "Status" : {
        type : Boolean,
        Required : true
    },
    "reserveType" : {
        type : String,
        Required : true
    },
    "Fees" : {
        type : Number,
        Required : true
    }
}

module.exports = parkingSlot;