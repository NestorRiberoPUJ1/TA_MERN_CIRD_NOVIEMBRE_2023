const Empresa = require("../models/empresa.model")




exports.createEmpresa = (req, res) => {
    const newEmpresa = new Empresa();
    res.status(200);
    res.json(newEmpresa);
}