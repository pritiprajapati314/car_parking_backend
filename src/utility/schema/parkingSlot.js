let parkingSlot = {
    "slotId" : {
        type : String,
        Unique : true,
        Required : true
    },
    "parkingLotId" : {
        type : String,
        Required : true
    },
    "ownerId" : {
        type : Number,
        Required : true,
    },
    "status" : {
        type : Boolean,
        Required : true
    },
    "fees" : {
        type : Number,
        Required : true
    }
}

module.exports = parkingSlot;