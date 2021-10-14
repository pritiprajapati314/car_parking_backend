class Vehicle{
    constructor(body){
        this.vehicleId = body.vehicleId;
        this.vehicleNumber = body.vehicle;
        this.userId = body.userId;
        this.vehicleType = body.vehicleType; //to be added
    }
};
module.exports = Vehicle;