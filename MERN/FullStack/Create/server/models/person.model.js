const { default: mongoose } = require("mongoose");


const PersonSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: [true, "Firstname is Required"],
    },
    lastName: {
        type: String,
        required: [true, "Lastname is required"],
    },
}, { timestamps: true, versionKey: false })

const Person = new mongoose.model("Person", PersonSchema);

module.exports = Person;