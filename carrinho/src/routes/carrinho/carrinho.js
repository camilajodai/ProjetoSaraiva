const express = require("express")
const route_carrinho = express.Router()
const data = require("../../database/config.js")

route_carrinho.get("/listar", (req, res) => {
    data.query("select * from carrinho", (error, dados) => {
        if (error) {
            return res.status(500).send({ msg: "Erro ao carregar os dados" })
        }
        res.status(200).send({ msg: "Ok", payload: dados })
    })
})

route_carrinho.post("/adicionar", (req,res) => {
    data.query("insert into carrinho set ?", req.body, (error, result) => {
        if (error) {
            return res.status(500).send({ msg: "Erro ao tentar adicionar no carrinho." })
        }
        res.status(201).send({ msg: "Ok", payload: result })
    })
})

route_carrinho.get("/listar/:id", (req, res) => {
    data.query(`SELECT foto.foto1,titulo.nometitulo,titulo.autor,carrinho.quantidade,
    preco.precodesconto,titulo.idtitulo,carrinho.total
    FROM saraivalivrodb.fotos foto INNER JOIN saraivalivrodb.titulos titulo
    ON foto.idfoto=titulo.idfoto INNER JOIN saraivacarrinhodb.carrinho carrinho
    ON titulo.idtitulo=carrinho.idproduto INNER JOIN saraivalivrodb.precos preco 
    ON preco.idpreco = titulo.idpreco WHERE carrinho.idusuario=?`, req.params.id, (error, dados) => {
        if (error) {
            return res.status(500).send({ msg: "Erro ao carregar os dados" })
        }
        res.status(200).send({ msg: "Ok", payload: dados })
    })
})

module.exports = route_carrinho