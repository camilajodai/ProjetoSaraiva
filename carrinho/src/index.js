require("dotenv").config()
const express = require("express")
const app = express()
const route_carrinho = require("./routes/carrinho/carrinho.js")
const cors = require("cors")


app.use(express.json())
app.use(cors())

app.use("/api/v1/carrinho", route_carrinho)

app.listen(process.env.HOST_PORT, () => {
    console.log(`Servidor online em ${process.env.HOST_NAME}:${process.env.HOST_PORT}`)
})