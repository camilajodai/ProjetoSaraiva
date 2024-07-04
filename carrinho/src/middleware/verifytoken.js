require("dotenv").config()
const jwt = require("jsonwebtoken")

const verify = (req, res, next) => {
    const tk = req.headers.token

    if (!tk) {
        return res.status(401).send({ msg: "Por favor faça login" })
    }
    jwt.verify(tk, process.env.JWT_KEY, { expires: process.env.JWT_EXPIRES }, (error, dados) => {
        if (error) {
            return res.staus(401).send({ msg: "Sessão finalizada. Efetue o login novamente." })
        }
        next()
    })
}

module.exports = verify