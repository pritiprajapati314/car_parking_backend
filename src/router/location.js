const express = require('express');
const { getlocation } = require('../controllers/location');
const locationrouter = express.Router();
locationrouter.get('/api/userpage/location',getlocation)
module.exports = locationrouter;