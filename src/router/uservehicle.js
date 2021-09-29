const express = require('express')
const { getVehicles } = require('../controllers/userVehicle') 
const router = express.Router();
router.get('/',getVehicles);

module.exports =  router;