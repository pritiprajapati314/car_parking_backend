const express = require('express');
const adminrouter = express.Router();
const bcrypt = require('bcrypt');
const Owner = require('../entity/owner');
const ParkingLot = require('../entity/parkingLot');


const ownerservice = require('../service/adminservice');
const parkingLotService = require('../service/parkingLotservice');
const ownerCollection = require('../utility/dbconection')
const parkingCollection = require('../utility/dbconection')
const adminCollection =  require('../utility/dbconection')
adminrouter.post('/owner-request', async (req, res, next) => {
    // instead we can use /approve
    //  this will be used when admin clicks on tick button in view 
    //  manager request panel
    try{
        let newOwner = new Owner(req.body);
        let newParkingLot = new ParkingLot(req.body);
        
        newOwner = await ownerservice.registerOwner(newOwner);
        newParkingLot.ownerId = newOwner.ownerId;
        console.log(newParkingLot)
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
adminrouter.delete('/deny',async(req,res)=>{
    
})

adminrouter.get('/view-manager',async (req,res)=>{
    try{
       let ownermodel = await ownerCollection.getOwnerModel();
       let managers = await ownermodel.find({});
       console.log(managers);
       res.status(200).json({response:managers});
    }
catch(error){
    res.status(500).json(error);
}
})

adminrouter.get('/view-parking',async(req,res,next)=>{
      try
      {
        let parkingmodel = await  parkingCollection.getPLotModel();
        let parkingspace = await parkingmodel.find({});
        console.log(parkingspace);
        res.status(200).json({response :parkingspace});

      }
      catch(err){
        next(err);
    }
})
adminrouter.get('/view-parking/:parkingLotId',async (req,res)=>{
    let parkingLot = req.params.parkingLotId;
    console.log(parkingLot);
})

adminrouter.post("/register", async (req,res)=>{
    
    try{
        //generate new password
       const salt = await bcrypt.genSalt(10);
       const hashPassword = await bcrypt.hash(req.body.password,salt)
        let User = await adminCollection.getAdminModel();

        //create new user
         const newUser = new User({
             username:req.body.username,
             email:req.body.email,
             password:hashPassword

         })
        //save user and send response
        const user = await newUser.save()
        res.status(200).json(user._id)
       
    }
    catch(err)
    {
        res.status(500).json(err)
        
    }
})
adminrouter.post("/login",async(req,res)=>{
    try{
        //validate username
        let User = await adminCollection.getAdminModel();  
        const user = await User.findOne({username:req.body.username})
        !user && res.status(400).json("Wrong username or password")

        //validate password
        const validPassword = await bcrypt.compare(req.body.password,user.password)
        !validPassword && res.status(400).json("Wrong username or password")

        //return id 
        res.status(200).json({_id:user._id,username:user.username})
    }
    catch(err)
    {
        res.status(500).json(err)
    }
})

module.exports = adminrouter;

// {
//     "ownerId" :"12345678",
//     "firstName": "Aisha",
//     "lastName": "Aggrawal",
//     "email":  "aishaaggarwal23@gmail.com",
//     "password": "khritijj",
//     "dateOfBirth": "20-09-2000",
//     "aadhar": "4455667788",
//     "contact" : 9998887654,
//     "alternative" : 8675489807,
//     "residence":  "A/339 AG Colony",
//      "parkingLotId" : "87567",
//     "address" : "New raearea",
//     "pin" : "98645367",
//     "city" : "Bhopal",
//     "area" : "New Market",
//     "addressId":"PATwhy",
//     "slots":3,
//     "fees": 50
// }