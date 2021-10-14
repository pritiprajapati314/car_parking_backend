const express = require('express');
let ManagerRequestCollection = require('../utility/dbconection');
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
ManagerRequestrouter.get('/requests',async(req,res)=>{
    try{
        console.log("hello")
        let ManagerRequestmodel = await ManagerRequestCollection.getManagerRequestModel();
        console.log("got the model");
         let requests = await ManagerRequestmodel.find({});
         console.log(requests);
         res.status(200).json({"sending the request" :requests});
    }
    catch(error){
        res.status(500).json(error);
    }
})

module.exports = ManagerRequestrouter;
