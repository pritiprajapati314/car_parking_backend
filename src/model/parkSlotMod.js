let parkSlotCollection = require('../utility/dbconection');
const { parkingLotId } = require('../utility/schema/parkingLot');
const { parkingSlotID } = require('../utility/schema/slotTiming');

let parkSlotModel = {}

parkSlotModel.addSlot = async (newSlot) => {
    
    let connection = await parkSlotCollection.getPSlotModel();
    let insertedSlot = await connection.create(newSlot);
    if(insertedSlot){
        return insertedSlot;
    }
    else{
        return err = new Error().status(505).message("Can't add the slot");
    }
    
}

parkSlotModel.getAvailable = async (parkLotId) => {
    let connection = await parkSlotCollection.getPSlotModel();
    let data = await connection.findOne({parkingLotId: parkLotId, status: false});
    let dataUpdate = await connection.updateOne({slotId: data.slotId}, {$set:{status:true}});
    return data;
}

parkSlotModel.makeAvailable = async (parkLotId) => {
    console.log("far off land", parkLotId);
    let connection = await parkSlotCollection.getPSlotModel();
    let dataUpdate = await connection.updateOne({slotId: parkLotId}, {$set:{status:false}});
    console.log(dataUpdate);
    return dataUpdate;
}

module.exports = parkSlotModel;