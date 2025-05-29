var dashboardModel = require("../models/dashboardModel");

function ultimaPontuacao(req, res) {
    var idUsuario = req.query.idUsuario; // pega da query string

    if (!idUsuario) {
        return res.status(400).json({ erro: "idUsuario não foi enviado" });
    }

    // converte para inteiro e valida
    idUsuario = parseInt(idUsuario);
    if (isNaN(idUsuario)) {
        return res.status(400).json({ erro: "idUsuario inválido" });
    }

    dashboardModel.ultimaPontuacao(idUsuario)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado[0]);
            } else {
                res.status(404).json({ mensagem: "Nenhum dado encontrado para esse usuário" });
            }
        }).catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function perfilLeitor(req, res) {
    var idUsuario = req.query.idUsuario; // pega da query string

    if (!idUsuario) {
        return res.status(400).json({ erro: "idUsuario não foi enviado" });
    }

    // converte para inteiro e valida
    idUsuario = parseInt(idUsuario);
    if (isNaN(idUsuario)) {
        return res.status(400).json({ erro: "idUsuario inválido" });
    }

    dashboardModel.perfilLeitor(idUsuario)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado[0]);
            } else {
                res.status(404).json({ mensagem: "Nenhum dado encontrado para esse usuário" });
            }
        }).catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    ultimaPontuacao,
    perfilLeitor
};
