const data = require("../../database/config.js")

function insert_register(idusuario, dh_acesso, tentativalogin, paginaacessada, observacao) {
    data.query(`insert into observadoracesso set idusuario=?, acesso=?, tentativalogin=?, paginaacessada=?, observacao =?`,
        [idusuario, dh_acesso, tentativalogin, paginaacessada, observacao], (error, result) => {
            if (error) {
                return "Erro ao tentar inserir a observação"
            }
            return result
        })
}

module.exports = insert_register