class Booking{
    constructor (body){
        
        this.city = body.city;
        this.area = body.area;
        this.date = body.date;
        this.pin = body.pin;
        this.startTime = body.startTime;
        this.endTime = body.endTime;

        // this.gender = body.gender;
        
    }
}

module.exports = Booking;