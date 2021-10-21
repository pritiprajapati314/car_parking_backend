let owner = {
    "ownerId" : {
        type : String,
        unique : true
    },
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
    "password":{
       type:String,
       required:true
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
   
}

module.exports = owner;