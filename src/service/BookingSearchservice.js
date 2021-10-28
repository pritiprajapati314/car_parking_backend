const parkingLot = require('../model/parkLotMod');
const parkingSlot = require('../model/parkSlotMod');

let BookingService = {};

BookingService.searchPLots=async(newRequest)=>{
    newRequest = await parkingLot.findPLots(newRequest);
    console.log(newRequest);
    return newRequest
}
    
BookingService.bookSlot = async(pLotId)=>{
    //console.log("i will have dinner after this");
    let newRequest = await parkingSlot.getAvailable(pLotId);
    //console.log("hello where is my order", newRequest);
    return newRequest
} 

BookingService.releaseSlot = async(pLotId)=>{
    console.log("some one from ");
    let updatedStatus = await parkingSlot.makeAvailable(pLotId);
    return updatedStatus;
}


module.exports = BookingService;