class Owner{
    constructor (body){
        this.ownerId = body.ownerId;
        this.email = body.email;
        this.password = body.password;
        this.firstName = body.firstName;
        this.lastName = body.lastName;
        this.dateOfBirth = body.dateOfBirth;
        this.address = body.address;
        this.pin = body.pin;
        this.city = body.city;
    }
}

module.exports = Owner;