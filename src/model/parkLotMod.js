let parkLotCollection = require('../utility/dbconection');
let parkingSlot = require('./parkSlotMod')
const { addressID } = require('../utility/schema/parkingLot');
const { firstName } = require('../utility/schema/user');

let parkLotModel = {};

parkLotModel.addParkLot = async (newParkLot) => {
    
    const connection = parkLotCollection.getPLotModel();
    //make parking lot id
    let insertedData = await connection.create(newParkLot);
    let slotToAdd = newParkLot.numberOfSlot;


    for(let i = 1; i<= slotToAdd; i++){
        //parking slot id {insert value of i after parking lot id}
        parkingSlot.addSlot(newParkingLot);
    }
    
};

parkLotModel.getParkLotById = async (parkLotId) => {

};

parkLotModel.getAvailable = async (parkLotId) => {
    //it will find available slot from parking slot
};