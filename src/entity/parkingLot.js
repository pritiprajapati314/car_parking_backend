class ParkingLot{
    constructor (body){
        this.parkingLotId = body.parkingLotId;
        this.numberOFSlot = body.slots;
        this.ownerId = body.ownerId;
        this.revenue = body.fees;
        this.addressID = body.addressID;
    }
}

module.exports = ParkingLot;