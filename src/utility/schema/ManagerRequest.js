let ManagerRequest = {
    "firstName": {
        type: String,        
    },
    "lastName": {
        type: String
    },
    "email": {
        type: String,
    },
    "dateOfBirth": {
        type: String,
    },
    "aadhar":
    {
        type:String,
        unique:true
    },
    "contact" : {
        type: Number,
    },
    "alternative" : {
        type: Number,
    },
    "residence":
    {
        type: String,
    },
    "address" : {
        type: String
    },
    "pin" : {
        type: String,
    },
  
    "city" : {
        type: String
    },
    "area" : {
        type: String
    },
    "slots":{
        type: Number
    },
    "fees":
    {
        type:Number
    }
}

module.exports = ManagerRequest;
