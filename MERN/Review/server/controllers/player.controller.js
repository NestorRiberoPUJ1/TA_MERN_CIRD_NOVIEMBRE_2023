const Player = require("../models/player.model");



module.exports.createPlayer = async (req, res) => {
    try {
        const newPlayer = await Player.create(req.body);
        console.log(newPlayer);
        res.status(201);
        res.json(newPlayer);
    } catch (error) {
        console.log(error);
        res.status(500);
        res.json(error);
    }
};
module.exports.getPlayers = async (req, res) => {
    try {
        const players = await Player.find();
        res.status(200);
        res.json(players);
    } catch (error) {
        console.log(error);
        res.status(500);
        res.json(error);
    }
};
module.exports.getPlayerById = async (req, res) => {
    try {
        const player = await Player.findById(req.params.id);
        res.status(200);
        res.json(player);
    } catch (error) {
        console.log(error);
        res.status(500);
        res.json(error);
    }
};
module.exports.updatePlayer = async (req, res) => {
    try {
        const updatedPlayer =await  Player.findOneAndUpdate({ _id: req.params.id }, req.body);
        res.status(200);
        res.json(updatedPlayer);
    } catch (error) {
        console.log(error);
        res.status(500);
        res.json(error);
    }
};
module.exports.deletePlayer = async (req, res) => {
    try {
        const deleted = await Player.deleteOne({ _id: req.params.id });
        res.status(200);
        res.json(deleted);
    } catch (error) {
        console.log(error);
        res.status(500);
        res.json(error);
    }
};