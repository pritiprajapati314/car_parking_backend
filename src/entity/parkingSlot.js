class ParkingSlot{
    constructor (body){
        this.slotId = body.userId;
        this.parkingLotId = body.vehicle;
        this.ownerID = body.email;
        this.status = body.password;
        this.fees = body.firstName;
    }
}

module.exports = ParkingSlot;