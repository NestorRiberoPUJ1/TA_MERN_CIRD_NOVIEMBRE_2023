const express = require('express');
const app = express();
const port = 8000;


const usuarioRoutes = require('./routes/usuario.routes');
app.use("/api/users", usuarioRoutes);

const empresaRoutes = require('./routes/empresa.routes');
app.use("/api/companies", empresaRoutes);

app.listen(port, () => console.log(`Listening on port: ${port}`));