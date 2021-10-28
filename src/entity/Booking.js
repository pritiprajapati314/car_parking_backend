class Booking{
    constructor (body){
        
        this.city = body.city;
        this.area = body.area;
        this.date = body.date;
        this.userId = body.userId;
        this.vehicleNumber = body.vehicleNumber;
        this.startTime = body.startTime;
        this.endTime = body.endTime;
    }
}

module.exports = Booking;