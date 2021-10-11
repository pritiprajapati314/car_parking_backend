const express = require('express');

let ManagerRequest = require('../entity/ManagerRequest');
const ManagerRequestrouter = express.Router();
const ManagerRequestservice = require('../service/managerRequestservice');
ManagerRequestrouter.post('/save', async (req,res)=>{
    console.log("router is working")
    console.log(req.body);
    let newRequest = new ManagerRequest(req.body);
    console.log(newRequest);
    try{
        let newRequest = new ManagerRequest(req.body);
        newRequest = await ManagerRequestservice.addManagerRequest(newRequest);
        res.json("Request added");
    }
    catch(err)
    {
        res.json(500).json(err);
    }
});


module.exports = ManagerRequestrouter;
