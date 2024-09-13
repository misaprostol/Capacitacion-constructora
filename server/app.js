const express= require ("express");
const app= express();
const port=3000;

const bodyParser = require('body-parser');
const cors = require('cors');
// Confuguración del middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const rutaUsuarios=require("./routes/user_routes.js");
app.use("/usuarios",rutaUsuarios);
app.listen(port, () => {
    console.log(`Servidor funcionando en el puerto ${port}`);
})