const mongoose = require("mongoose");




const PlayerSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Player name is required"],
        minLength: [2, "Player name must be at least 2 characters long"],
    },
    position: {
        type: String,
        required: false,
        enum: ["Forward", "Midfielder", "Defense", "Goalkeeper"],
    },
    status: {
        type: [String],
        required: true,
        default: ["Undecided", "Undecided", "Undecided"]
    }

}, { timestamps: true, versionKey: false });

const Player = new mongoose.model("Player", PlayerSchema);

module.exports = Player;