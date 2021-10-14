class ParkingLot{
    constructor (body){
        this.parkingLotId = body.parkingLotId;
        this.numberOFSlot = body.numberOfSlot;
        this.ownerId = body.ownerId;
        this.revenue = body.revenue;
        this.addressID = body.addressID;
    }
}

module.exports = ParkingLot;