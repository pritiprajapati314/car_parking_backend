class Vehicle{
    constructor(body){
        this.vehicleId = body.vehicleId;
        this.userId = body.userId;
        this.vehicleType = body.vehicleType;
    }
};
module.exports = Vehicle;