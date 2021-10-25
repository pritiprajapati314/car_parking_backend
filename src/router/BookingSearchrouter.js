const express = require('express');
let BookingSearchCollection = require('../utility/dbconection');
let parkingCollection =  require('../utility/dbconection');
let BookingSearch = require('../entity/Booking');
const BookingSearchrouter = express.Router();
const BookingSearchservice = require('../service/BookingSearchservice');
const { city } = require('../utility/schema/owner');
// BookingSearchrouter.post('/search', async (req,res)=>{
//     console.log("router is working")
//     console.log(req.body);
//     let newRequest = new BookingSearch(req.body);
//     console.log(newRequest);
//     try{
//         console.log("hello");
       
//         let newRequest = new BookingSearch(req.body);
//         newRequest = await BookingSearchservice.addSearchRequest(newRequest);
//         console.log("Request")
      
//         res.json("Request added");
//     }
//     catch(err)

//     {
//         res.json(500).json(err);
//     }
// });
BookingSearchrouter.get('/getrequests',async(req,res)=>{
    try{
    
        let BookingSearchmodel = await BookingSearchCollection.getBookingSearchModel();    
         let requests = await BookingSearchmodel.find({});
         console.log(requests);
         res.status(200).json({"sending the request" :requests});
    }
    catch(error){
        res.status(500).json(error);
    }
})
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
BookingSearchrouter.post('/search-parking',async(req,res)=>{
    let userpattern = new RegExp("^"+req.body.area )
    let parking =await parkingCollection.getPLotModel();
    parking.find({area:{$regex:userpattern}}).
    then(parking=>{
        res.json({parking})
    }).catch(err=>{
            console.log(err)
        })
    })




module.exports = BookingSearchrouter;

// {
//     "city": "Bhopal",
//      "area": "New Market",
//      "date": "20-08-2000",
//      "pin": "123445",
//      "startTime": "15:08",
//      "endTime": "19:09"
//    }
   