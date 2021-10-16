const express = require('express');
let BookingSearchCollection = require('../utility/dbconection');
let BookingSearch = require('../entity/Booking');
const BookingSearchrouter = express.Router();
const BookingSearchservice = require('../service/BookingSearchservice');
const { city } = require('../utility/schema/owner');
BookingSearchrouter.post('/search', async (req,res)=>{
    console.log("router is working")
    console.log(req.body);
    let newRequest = new BookingSearch(req.body);
    console.log(newRequest);
    try{
        console.log("hello");
        let newRequest = new BookingSearch(req.body);
        newRequest = await BookingSearchservice.addSearchRequest(newRequest);
        console.log("Request")
        res.json("Request added");
    }
    catch(err)

    {
        res.json(500).json(err);
    }
});
BookingSearchrouter.get('/getrequests',async(req,res)=>{
    try{
        console.log("hello")
        let BookingSearchmodel = await BookingSearchCollection.getBookingSearchModel();
        console.log("got the model");
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
        console.log("hello")
        let BookingSearchmodel = await BookingSearchCollection.getBookingSearchModel();
        console.log("got the model");
         let cityName = await BookingSearchmodel.find({},{city:1,_id:0});
         console.log(cityName);
         res.status(200).json({"sending the request" :cityName});
    }
    catch(error){
        res.status(500).json(error);
    }
})
module.exports = BookingSearchrouter;