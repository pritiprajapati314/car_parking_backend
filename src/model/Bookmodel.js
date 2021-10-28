let parkingLot = require('../utility/dbconection');
let parkingSlotModel = require('./parkLotMod');
let BookingSearchmodel = {} 


BookingSearchmodel.bookingSlot= async () => {
    //console.log("hi");
    let connection = await parkingLot.getPLotModel();
    let data = await connection.find({});
    return data;
}


module.exports = BookingSearchmodel;