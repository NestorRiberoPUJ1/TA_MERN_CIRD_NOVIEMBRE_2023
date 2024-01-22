
const express = require('express');
const router = express.Router();

const playerControllers = require('../controllers/player.controller');


router.post("", playerControllers.createPlayer);
router.get("", playerControllers.getPlayers);
router.get("/:id", playerControllers.getPlayerById);
router.put("/:id", playerControllers.updatePlayer);
router.delete("", playerControllers.deletePlayer);

module.exports = router;



