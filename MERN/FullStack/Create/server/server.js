
const express = require('express');
const app = express();
const port = 8000;
const cors = require("cors");

require('./config/mongoose.config');

app.use(
    cors({
        credentials: true,
        origin: [`http://localhost:3000`,]
    })
)


app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const personRoutes = require('./routes/person.routes');
app.use("/api/person", personRoutes);


app.listen(port, () => console.log(`Listening on port: ${port}`));