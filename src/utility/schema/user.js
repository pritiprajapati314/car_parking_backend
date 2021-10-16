//Priti : defining the final for the collection user

let user = {
    "userId": {
        type: Number,
        required: true,
        unique: true
    },
    "password":{
        type: String,
        required: true
    },
    "firstName": {
        type: String,        
    },
    "lastName": {
        type: String
    },
    "email": {
        type: String,
        required: true,
        unique: true
    },
    "dateOfBirth": {
        type: Date
    },
    "gender":{
        type: String,
        required: true
    },
    "vehicle":{
        type: Array
    },
    "contact" : {
        type: String,
        required: true
    },
    "address" : {
        type: String,
        required: true
    },
    "pin" : {
        type: String,
        required: true
    }
}

module.exports = user;
