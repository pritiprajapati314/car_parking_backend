class ManagerRequest{
    constructor (body){
        
        
        this.firstName = body.firstName;
        this.lastName = body.lastName;
        this.email = body.email;
        this.dateOfBirth = body.dateOfBirth;
        this.aadhar =body.aadhar;
        this.contact =body.contact;
        this.alternative = body.alternative;
        this.residence = body.residence;
        this.address = body.address;
        this.pin = body.pin;
        this.city = body.city;
        this.area = body.area;
        this.slots = body.slots;
        this.fees =body.fees;
        // this.gender = body.gender;
        
    }
}

module.exports = ManagerRequest;