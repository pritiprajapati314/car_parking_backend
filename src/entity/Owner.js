class User{
    constructor (body){
        this.userId = body.userId;
        this.vehicle = body.vehicle;
        this.email = body.email;
        this.password = body.password;
        this.firstName = body.firstName;
        this.lastName = body.lastName;
        this.dateOfBirth = body.dateOfBirth;
        this.gender = body.gender;
        this.contact = body.contact;
        this.address = body.address;
        this.pin = body.pin;
    }
}

module.exports = User;