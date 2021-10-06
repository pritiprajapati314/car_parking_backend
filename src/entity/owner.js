class Owner{
    constructor (body){
        this.ownerId = body.ownerId;
        this.numberOfSlot = body.numberOfSlot;
        this.email = body.email;
        this.password = body.password;
        this.firstName = body.firstName;
        this.lastName = body.lastName;
        this.dateOfBirth = body.dateOfBirth;
        this.gender = body.gender;
        this.contact = body.contact;
        this.address = body.address;
        this.pin = body.pin;
        this.revenue = body.revenue;
    }
}

module.exports = Owner;