let owner = {
    "ownerId" : {
        type : String,
        unique : true
    },
    "email" : {
        type : String,
        unique : true
    },
    "firstName" : {
        type : String, 
 
    },
    "lastName" : {
        type : String

    }, 
    "dateOfBirth" : {
        type : Date
    }, 
    "address" : {
        type : String
    }, 
    "city" : {
        type : String
    },
    "pin" : {
        type : String
    }

}

module.exports = owner;