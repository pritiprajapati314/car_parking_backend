const managerRequestmodel = require('../model/ManagerRequestmodel');
const managerRequest = require('../utility/schema/ManagerRequest');

let managerRequestService = {};
managerRequestService.addManagerRequest=async(newRequest)=>{
    console.log("service")

    newRequest = await managerRequestmodel.addRequest(newRequest);
    console.log(newRequest);
    return newRequest
}
    
    


module.exports = managerRequestService;