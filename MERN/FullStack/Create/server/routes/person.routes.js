const express = require('express');
const router = express.Router();

const personControllers = require('../controllers/person.controller');


router.post("", personControllers.createPerson);


module.exports = router;