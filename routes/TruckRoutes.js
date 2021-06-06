const express = require('express')
const getTrucks =require( '../controllers/TruckController.js')


const router =  express.Router();

router.get('/:id1/:id2',getTrucks)


module.exports = router;