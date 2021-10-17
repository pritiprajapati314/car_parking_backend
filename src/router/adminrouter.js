const express = require('express');
const adminrouter = express.Router();

const Owner = require('../entity/owner');
const ParkingLot = require('../entity/parkingLot');

const ownerservice = require('../service/adminservice');
const parkingLotService = require('../service/parkingLotservice');


adminrouter.post('/owner-request', async (req, res, next) => {
    // instead we can use /approve
    //  this will be used when admin clicks on tick button in view 
    //  manager request panel
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
//deleting request this will delete it from the manager requests
//view approved request in view manager - name email city area 
//view parking lots  - owner name/id,slots,fees,area,city,pin




module.exports = adminrouter;