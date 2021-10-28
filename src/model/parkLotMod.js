let parkLotCollection = require('../utility/dbconection');
let parkingSlot = require('../entity/parkingSlot')
let parkingSlotModel = require('./parkSlotMod');
const { parkingLotId } = require('../utility/schema/parkingLot');

let parkLotModel = {};

parkLotModel.addParkLot = async (newParkLot) => {
    const connection = await parkLotCollection.getPLotModel();
    newParkLot.parkingLotId = await parkLotModel.generateId();
    let insertedData = await connection.create(newParkLot);
    for(let i = 1; i<= newParkLot.slots; i++){
        let newParkingSlot = new parkingSlot(insertedData);
        console.log(newParkingSlot);
        newParkingSlot.slotId += '/' + i;
        newParkingSlot.status = false;
        await parkingSlotModel.addSlot(newParkingSlot);
        
    }
   console.log("loop over") 
};

parkLotModel.generateId = async() => {

    const connection = await parkLotCollection.getPLotModel();
    let ids = await connection.distinct("parkingLotId");
    let uId = Math.max(...ids);
    if(uId == -Infinity)return 1;
    console.log(uId);
    return uId + 1;  
}

parkLotModel.findPLots = async (newRequest) => {
    let connection = await parkLotCollection.getPLotModel();
    let insertedData = await connection.find({city: newRequest.city, area: newRequest.area});
    if(insertedData){
        return insertedData;
    }else{
        let err = new Error("Error occured in adding user");
        err.status = 500;
        throw err;
    }
}

parkLotModel.getAvailable = async (parkLotId) => {
    let connection = await parkLotCollection.getPLotModel();
    let data = await connection.find({ownername: ownername});
    return data;
};

module.exports = parkLotModel;
