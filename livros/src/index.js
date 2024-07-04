require("dotenv").config()
const express = require("express")
const route_titulo = require("./routes/titulos/titulos.js")
const routerPreco = require("./routes/precos/precos.js")
const routeFoto = require("./routes/fotos/fotos.js")
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())

app.use("/api/v1/livros", route_titulo)
app.use("/api/v1/precos", routerPreco)
app.use("/api/v1/fotos", routeFoto)

app.listen(process.env.HOST_PORT, () => {
    console.log(`Servidor online em ${process.env.HOST_NAME}:${process.env.HOST_PORT}`)
})