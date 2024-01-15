
const express = require('express');
const router = express.Router();

const bromasController = require('../controllers/broma.controller');


router.post("", bromasController.createBroma);
router.get("", bromasController.getBromas);
router.get("/random", bromasController.getBromaRandom);
router.get("/:id", bromasController.getBromaById);
router.put("/:id", bromasController.updateBroma);
router.delete("/:id", bromasController.deleteBroma);

module.exports = router;