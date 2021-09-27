const parkingLot = require("./parkingLot");

let parkingSlotReservation = {
    "id":{
        type:Number
    },
    "customer-id":{
        type:Number
    },
    "start-timestamp":{
         type:String,
         required:true
    },
    "duration_in_minutes":{
        type:Number,
        required:true

    },
    "booking_date":{
        type:Date,
        required:true

    },
    "parking_slot_info":[parkingLot]
}