let parkLotCollection = require('../utility/dbconection');
let parkingSlot = require('../entity/parkingSlot')
let parkingSlotModel = require('./parkSlotMod');

let parkLotModel = {};

parkLotModel.addParkLot = async (newParkLot) => {
    console.log("hey")
    const connection = await parkLotCollection.getPLotModel();
    newParkLot.parkingLotId = await parkLotModel.generateId();
    console.log("got teh id")
    let insertedData = await connection.create(newParkLot);
    for(let i = 1; i<= newParkLot.slots; i++){
        console.log("hi")
        let newParkingSlot = new parkingSlot(insertedData);
        console.log(newParkingSlot);
        newParkingSlot.slotId += '/' + i;
        newParkingSlot.status = false;
        console.log( newParkingSlot.slotId)
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

parkLotModel.getParkLotById = async (parkLotId) => {
    let parkLotModel = await ownerCollection.getPLotModel();
    let data = await ownerModel.find({ownername: ownername});
    return data;


};

parkLotModel.getAvailable = async (parkLotId) => {
    //it will find available slot from parking slot
};

module.exports = parkLotModel;
