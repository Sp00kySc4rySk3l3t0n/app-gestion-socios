const express = require("express");
const cors = require("cors");
require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static("public"))

app.use("/api", require("./routes"))

app.use(express.static("storage"))

const dbConnect = require('./config/mongo')
dbConnect()

const port = process.env.PORT || 3001
app.listen(port, () => {
    console.log("Servidor escuchando en el puerto "+port)
})

module.exports = app