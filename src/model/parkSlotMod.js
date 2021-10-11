let parkSlotCollection = require('../utility/dbconection');

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
    //this will sent no of available lot in parking lot
}

module.exports = parkSlotModel;