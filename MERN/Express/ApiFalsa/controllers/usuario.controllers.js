const Empresa = require("../models/empresa.model");
const Usuario = require("../models/usuario.model")




exports.createUsuario = (req, res) => {
    const newUser = new Usuario();
    res.status(200);
    res.json(newUser);
}

exports.createUsuarioAndEmpresa = (req, res) => {
    const response = {
        usuario: new Usuario(),
        empresa: new Empresa(),
    }
    res.status(200);
    res.json(response);

}