let Admin = {
    "username":{
        type:String,
        required:true,
        min:3,
        max:20,
        unique:true
    },
    "email":
    {
        type:String,
        required:true,
        max:50,
        unique:true

    },
    "password":{
        type:String,
        required:true,
        min:6,
        
    }
}
module.exports = Admin;