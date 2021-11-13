const express = require('express');
let BookingSearch = require('../entity/Booking');
let BookingRequestCollection = require('../utility/dbconection');
const BookingSearchrouter = express.Router();
const BookingSearchservice = require('../service/BookingSearchservice');
const { city } = require('../utility/schema/owner');

BookingSearchrouter.post('/search', async (req,res)=>{
    try{
        let newRequest = new BookingSearch(req.body);
        newRequest = await BookingSearchservice.searchPLots(newRequest);
        res.json({response: newRequest});
    }
    catch(err){
        res.json(500).json(err);
    }
});
BookingSearchrouter.get('/search-results',async(req,res)=>{
    try{
        let BookingRequestmodel = await BookingRequestCollection.getBookingSearchModel();
        let requests = await BookingRequestmodel.find({});
        console.log(requests);
        res.status(200).json({response :requests});
    }
    catch(err)
    {
        res.json(500).json(err);

    }
})
BookingSearchrouter.get('/bookSlot',async(req,res)=>{
    try{ 
        let bookSlot = await BookingSearchservice.bookSlot(req.body.parkingLotId);
        res.json({"recivedSlot": bookSlot});
    }
    catch(error){
        res.status(500).json(error);
    }
});

BookingSearchrouter.get('/checkOut', async(req, res)=>{
    try{
        console.log("hello i am ");
        let checkOut = await BookingSearchservice.releaseSlot(req.body.slotId);
        res.json({"checkOut": checkOut});
    }
    catch(error){

    }
});

BookingSearchrouter.get('/getCity',async(req,res)=>{
    try{
        let BookingSearchmodel = await BookingSearchCollection.getBookingSearchModel();
         let cityName = await BookingSearchmodel.find({},{city:1,_id:0});
         console.log(cityName);
         res.status(200).json({"sending the request" :cityName});
    }
    catch(error){
        res.status(500).json(error);
    }
})

BookingSearchrouter.get('/getbyarea',async(req,res)=>{
    try{
          
    }
    catch(error){
        res.status(500).json(error);
    }
})
// BookingSearchrouter.post('/search-parking',async(req,res)=>{
//     let userpattern = new RegExp("^"+req.body.area )
//     let parking =await parkingCollection.getPLotModel();
//     parking.find({area:{$regex:userpattern}}).
//     then(parking=>{
//         res.json({parking})
//     }).catch(err=>{
//             console.log(err)
//         })
//     })




module.exports = BookingSearchrouter;

/* {
    "city": "Bhopal",
     "area": "New Market",
     "date": "20-08-2000",
     "userId": "123445",
     "vehicleNumber" : "XX-00-123",
     "startTime": "15:08",
     "endTime": "19:09"
   }
    */