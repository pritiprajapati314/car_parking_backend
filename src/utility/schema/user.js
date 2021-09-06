let user = {
    "userId": {
        type: Number,
        required: true,
        unique: true
    },
    "username": {
        type: String,
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
        type: Date,
        required: true,
    },
    "gender":{
        type: String,
    }
}

module.exports = user;