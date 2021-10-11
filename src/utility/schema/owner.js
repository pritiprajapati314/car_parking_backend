let owner = {
    "ownerId" : {
        type : String,
        unique : true,
        required : true
    },
    "firstName" : {
        type : String, 
        required : true
    },
    "lastName" : {
        type : String, 
        required : true
    }, 
    "dateOfBirth" : {
        type : Date,
        required : true
    }, 
    "address" : {
        type : String, 
        required : true
    }, 
    "city" : {
        type : String, 
        required : true
    },
    "pin" : {
        type : String, 
        required : true
    }

}

module.exports = owner;
