class ParkingLot{
    constructor (body){
        this.parkingLotId = body.parkingLotId;
        this.ownerId = body.ownerId;
        this.address = body.address;
        this.pin = body.pin;
        this.city = body.city;
        this.area = body.area;
        this.addressID = body.addressID;
        this.slots = body.slots;
        this.fees =body.fees;
    }
}

module.exports = ParkingLot;