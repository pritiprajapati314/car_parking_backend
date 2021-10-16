const express = require('express');
const adminrouter = express.Router();

const Owner = require('../entity/owner');
const ParkingLot = require('../entity/parkingLot');

const ownerservice = require('../service/adminservice');
const parkingLotService = require('../service/parkingLotservice');


adminrouter.post('/owner-request', async (req, res, next) => {
    try{
        let newOwner = new Owner(req.body);
        let newParkingLot = new ParkingLot(req.body);

        newOwner = await ownerservice.registerOwner(newOwner);
        newParkingLot.ownerId = newOwner.ownerId;
        newParkingLot = await parkingLotService.addParkingLot(newParkingLot);

        res.json(newOwner);
    }
    catch(err){
        return err;
    }
});


module.exports = adminrouter;