class ParkingSlot{
    constructor (body){
        this.slotId = body.parkingLotId;
        this.parkingLotId = body.parkingLotId;
        this.ownerId = body.ownerId;
        this.status = body.status;
        this.fees = body.revenue;
    }
}

module.exports = ParkingSlot;