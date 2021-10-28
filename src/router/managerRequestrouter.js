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
       
        let ManagerRequestmodel = await ManagerRequestCollection.getManagerRequestModel();
         let requests = await ManagerRequestmodel.find({});
         console.log(requests);
         res.status(200).json({response :requests});
    }
    catch(error){
        res.status(500).json(error);
    }
})
ManagerRequestrouter.get('/requests/:id',async(req,res)=>{
    try{
       
        let ManagerRequestmodel = await ManagerRequestCollection.getManagerRequestModel();
<<<<<<< HEAD
        console.log("got the model", req.params);
        let requests = await ManagerRequestmodel.findById(req.params.id);
        console.log(requests);
        res.status(200).json({response:requests});
=======
        console.log("got the model")
         let requests = await ManagerRequestmodel.findById(req.params.id);
         console.log("this is find by id")
         console.log(req.params.id);
         console.log(requests);
         res.status(200).json({response:requests});
>>>>>>> 556fa9f62aee20a8993aa59e9dfa8337a7bb0621
    }
    catch(error){
        res.status(500).json(error);
    }
})
module.exports = ManagerRequestrouter;
//http://localhost:3000/managerRequest/requests/61613cc01d6c1d82f3b50769