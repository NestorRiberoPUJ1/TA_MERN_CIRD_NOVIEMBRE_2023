const express = require('express');
const router = express.Router();

const usuarioController = require('../controllers/usuario.controllers');

router.get("/new", usuarioController.createUsuario);
router.get("/company", usuarioController.createUsuarioAndEmpresa);

module.exports = router;