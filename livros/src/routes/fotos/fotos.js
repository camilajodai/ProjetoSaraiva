const express = require("express")
const routeFoto = express.Router()
const data = require("../../database/config.js")

routeFoto.post("/cadastrar", (req, res) => {
    data.query("insert into fotos set ?", req.body, (error, result) => {
        if (error) {
            return res.status(500).send({ msg: "Erro ao cadastrar" })
        }
        res.status(201).send({ msg: "Ok", payload: result })
    })
})

module.exports = routeFoto