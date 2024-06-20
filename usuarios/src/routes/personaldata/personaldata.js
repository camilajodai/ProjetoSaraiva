require("dotenv").config()
const express = require("express")
const routerpersonal = express.Router()
const data = require("../../database/config.js")

routerpersonal.get("/listar", (req, res) => {
    data.query("select * from dadospessoais", (error, result) => {
        if (error) {
            return res.status(500).send({ msg: "Erro ao ler os dados" })
        }
        res.status(200).send({ msg: "Ok", payload: result })
    })
})

routerpersonal.get("/listar:cpf", (req, res) => {
    data.query("select * from dadospessoais where iddadospessoais=?", req.params.cpf, (error, result) => {
        if (error) {
            return res.status(500).send({ msg: "Erro ao tentar carregar os dados" })
        }
        res.status(200).send({ msg: "Ok", payload: result })
    })
})

routerpersonal.post("/cadastrar", (req, res) => {
    data.query("insert into dadospessoais set ?", req.body, (error, result) => {
        if (error) {
            return res.status(500).send({ msg: "Erro ao tentar cadastrar" })
        }
        res.status(201).send({ msg: "Ok", payload: result })
    })
})