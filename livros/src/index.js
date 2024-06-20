require("dotenv").config()
const express = require("express")
const route_titulo = require("./routes/titulos/titulos.js")

const app = express()
app.use(express.json())

app.use("/api/v1/livros", route_titulo)

app.listen(process.env.HOST_PORT, () => {
    console.log(`Servidor online em ${process.env.HOST_NAME}:${process.env.HOST_PORT}`)
})