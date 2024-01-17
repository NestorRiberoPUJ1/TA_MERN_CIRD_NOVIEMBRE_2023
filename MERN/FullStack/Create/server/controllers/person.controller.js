const Person = require("../models/person.model")





module.exports.createPerson = async (req, res) => {
    try {
        const newPerson = await Person.create(req.body);
        res.status(201);
        res.json(newPerson);
    } catch (error) {
        res.status(500);
        res.json(error);
    }
}