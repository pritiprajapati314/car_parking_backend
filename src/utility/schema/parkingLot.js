let parkingLot = {
    "parkingLotId" : {
        type : String,
        unique : true,
        required : true
    },
    "ownerId" : {
        type : Number,
    },
    "address" : {
        type: String,
        required:true
    },
    "pin" : {
        type: String,
       required:true
    },
  
    "city" : {
        type: String,
        required:true
    },
    "area" : {
        type: String,
        required:true
    },
    "addressId":{
        type: String,
       
    },
    "slots":{
        type: Number,
        required:true
    },
    "fees":
    {
        type:Number,
        required:true

    }
}

module.exports = parkingLot;
