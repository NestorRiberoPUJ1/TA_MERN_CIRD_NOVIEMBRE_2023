const express = require('express');
const router = express.Router();

const empresaController = require('../controllers/empresa.controllers');

router.get("/new", empresaController.createEmpresa);


module.exports = router;