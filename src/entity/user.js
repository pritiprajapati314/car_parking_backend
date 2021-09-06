class User{
    constructor (body){
        this.userId = body.userId;
        this.username = body.username;
        this.email = body.email;
        this.password = body.password;
        this.firstName = body.firstName;
        this.lastName = body.lastName;
        this.dateOfBirth = body.dateOfBirth;
        this.gender = body.gender;
    }
}

module.exports = User;