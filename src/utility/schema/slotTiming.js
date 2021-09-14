let slotTiming = {
    "SlotID" : {
        type : Number,
        required : true,
        Unique : true
    },
    "parkingSlotID" : {
        type : Number,
        required : true,
    },
    "parkingLotID" : {
        type : Number,
        required : true,
    },
    "VehicleId" : {
        type : Number,
        required : true
    },
    "bookingTime" : {
        type : Date,
        required : true
    },
    "CheckOutTime" : {
        type : Date 
    }
}

module.exports = slotTiming;