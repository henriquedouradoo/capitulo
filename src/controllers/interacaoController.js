var interacaoModel = require("../models/interacaoModel");

function interacaoVersiculo(req, res) {
  var idUsuario = req.body.idUsuarioServer;
  var anotacao = req.body.anotacaoServer;
  var status = req.body.statusServer;
  var localizacao = req.body.localizacaoServer;

  if (anotacao == undefined) {
    res.status(400).send("Você não tem anotação válida!");
  } else if (idUsuario == undefined) {
    res.status(400).send("Seu id está undefined!");
  } else if (status == undefined) {
    res.status(400).send("O tipo de interação está undefined!");
  } else if (localizacao == undefined) {
    res.status(400).send("A localização está undefined!");
  } 
  else {
    interacaoModel
      .interacaoVersiculo(idUsuario, anotacao, status, localizacao)
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function totalAnotacao(req, res) {
  var idUsuario = req.params.idUsuario;

  interacaoModel.totalAnotacao(idUsuario)
    .then(function (resultado) {
      res.json(resultado);
    })
    .catch(function (erro) {
      console.log(erro);
      res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
  interacaoVersiculo,
  totalAnotacao
};
