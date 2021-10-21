const validation = require('../utility/validation');
const parkingLotModel = require('../model/parkLotMod')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
let config = require('../utility/config');



let parkingLotService = {};
 
parkingLotService.addParkingLot = async(newParkingLot) => {
    //newParkingLot.parkingLotId = newParkingLot.ownerId + '/' + newParkingLot.addressID;
    newParkingLot = parkingLotModel.addParkLot(newParkingLot);
    return newParkingLot;
}


module.exports = parkingLotService;