class Owner{
    constructor (body){
        this.ownerId = body.ownerId;
        this.firstName = body.firstName;
        this.lastName = body.lastName;
        this.email = body.email;
        this.password = body.password;
        this.dateOfBirth = body.dateOfBirth;
        this.aadhar =body.aadhar;
        this.city = body.city;
        this.contact =body.contact;
        this.alternative = body.alternative;
        this.residence = body.residence;
    }
}

module.exports = Owner;