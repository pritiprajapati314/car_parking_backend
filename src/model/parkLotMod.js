let parkLotCollection = require('../utility/dbconection');
let parkingSlot = require('../entity/parkingSlot')
let parkingSlotModel = require('./parkSlotMod');

let parkLotModel = {};

parkLotModel.addParkLot = async (newParkLot) => {
    
    const connection = await parkLotCollection.getPLotModel();
    
    let insertedData = await connection.create(newParkLot);

    for(let i = 1; i<= newParkLot.numberOFSlot; i++){
        let newParkingSlot = new parkingSlot(insertedData);
        newParkingSlot.slotId += '/' + i;
        newParkingSlot.status = false;
        parkingSlotModel.addSlot(newParkingSlot);
    }
    
};

parkLotModel.getParkLotById = async (parkLotId) => {

};

parkLotModel.getAvailable = async (parkLotId) => {
    //it will find available slot from parking slot
};

module.exports = parkLotModel;