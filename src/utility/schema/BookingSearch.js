let BookingSearch = { 
  
    "city" : {
        type: String,
       required:true
    },
    "area" : {
        type: String,
       required:true
    },
    "date":
    {
        type:String,
        required:true
    },
    "pin" : {
        type: String,
       required:true
    },
    "startTime":{
        type:String,
        required:true
    },
    "endTime":
    {
        type:String,
        required:true
    }
    
    
}

module.exports = BookingSearch;

