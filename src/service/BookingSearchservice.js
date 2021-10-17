const BookingSearchmodel = require('../model/Bookmodel');

let BookingSearchService = {};
BookingSearchService.addSearchRequest=async(newRequest)=>{
    console.log("service")
    newRequest = await BookingSearchmodel.addRequest(newRequest);
    console.log(newRequest);
    return newRequest
}
    
BookingSearchService.getSearchRequest=async()=>{
    
    let newRequest = await  BookingSearchmodel.getSearchRequests();
    console.log(newRequest);
    return newRequest
} 


module.exports = BookingSearchService;