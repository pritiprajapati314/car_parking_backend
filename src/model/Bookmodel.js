let BookingSearchCollection = require('../utility/dbconection');
let BookingSearchmodel = {} 

BookingSearchmodel.addRequest = async (newRequest) => {
    console.log("hi")
    let BookingSearchmodel = await BookingSearchCollection.getBookingSearchModel();
    let insertedData = await BookingSearchmodel.create(newRequest);
    console.log(insertedData)
    if(insertedData){
        return insertedData;
    }else{
        let err = new Error("Error occured in adding user");
        err.status = 500;
        throw err;
    }
}
BookingSearchmodel.getSearchRequests= async () => {
    console.log("hi");
    let BookingSearchmodel = await BookingSearchCollection.getBookingSearchmodel();
    let data = await BookingSearchmodel.find({});
    return data;
}


module.exports = BookingSearchmodel;