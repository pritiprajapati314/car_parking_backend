const express = require('express');
const adminrouter = express.Router();

const Owner = require('../entity/owner');
const ParkingLot = require('../entity/parkingLot');

const ownerservice = require('../service/adminservice');

adminrouter.post('/owner-request', async (req, res, next) => {
    try{
        let newOwner = new Owner(req.body);
        let newParkingLot = new ParkingLot(req.body);
        //it could be stored in the database as it is.


        newOwner = await ownerservice.registerOwner(newOwner);
        //newParkingLot = await parkingLotservice.addParkingLot(newParkingLot);
        res.json(newOwner);
    }
    catch(err){
        res.json("some error was faced");
    }
});


module.exports = adminrouter;