let ManagerRequest = {
    
    "firstName": {
        type: String,        
    },
    "lastName": {
        type: String
    },
    "email": {
        type: String,
       required:true,
        unique: true
    },
    "dateOfBirth": {
        type: String,
        required:true
    },
    "aadhar":
    {
        type:String,
        unique:true,
        required:true
    },
    "contact" : {
        type: Number,
       required:true
    },
    "alternative" : {
        type: Number,
       required:true
    },
    "residence":
    {
        type: String,
       required:true

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
    "slots":{
        type: Number,
        required:true
    },
    "fees":
    {
        type:Number,
        required:true

    },
    // "gender":{
    //     type: String,
        
    // }
    
   
    
}

module.exports = ManagerRequest;
