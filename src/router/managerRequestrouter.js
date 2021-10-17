const express = require('express');
let ManagerRequestCollection = require('../utility/dbconection');
let ManagerRequest = require('../entity/ManagerRequest');
const ManagerRequestrouter = express.Router();
const ManagerRequestservice = require('../service/managerRequestservice');


ManagerRequestrouter.post('/save', async (req,res)=>{
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
ManagerRequestrouter.get('/requests',async(req,res)=>{
    try{
        console.log("hello")
        let ManagerRequestmodel = await ManagerRequestCollection.getManagerRequestModel();
        console.log("got the model");
         let requests = await ManagerRequestmodel.find({});
         console.log(requests);
         res.status(200).json({"requests":requests});
    }
    catch(error){
        res.status(500).json(error);
    }
})

module.exports = ManagerRequestrouter;
