var quizModel = require("../models/quizModel");

function quizEnsinamentos(req, res) {
  var idUsuario = req.body.idUsuarioServer;
  var pontuacao = req.body.pontuacaoServer;
  var idQuizEnsinamentos = req.body.idQuizEnsinamentosServer;

  if (pontuacao == undefined) {
    res.status(400).send("Você não tem pontuação válida!");
  } else if (idUsuario == undefined) {
    res.status(400).send("Seu id está undefined!");
  } else if (idQuizEnsinamentos == undefined) {
    res.status(400).send("O id do quiz está undefined!");
  } else {
    quizModel
      .finalizarJogo(pontuacao, idUsuario, idQuizEnsinamentos)
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
      });
  }
}

// function ultimaPontuacao(req, res) {
//   var idUsuario = req.params.idUsuario;

//   quizModel
//     .ultimaPontuacao(idUsuario)
//     .then((resultado) => {
//       res.status(200).json(resultado);
//     })
//     .catch((erro) => {
//       res.status(500).json(erro.sqlMessage);
//     });
// }

function quizHabitos(req, res) {
  var idUsuario = req.body.idUsuarioServer;
  var perfilLeitor = req.body.perfilLeitorServer;
  var idQuizHabitos = req.body.idQuizHabitosServer;

  if (perfilLeitor == undefined) {
    res.status(400).send("Você não tem um perfil válido!");
  } else if (idUsuario == undefined) {
    res.status(400).send("Seu id está undefined!");
  } else if (idQuizHabitos == undefined) {
    res.status(400).send("O id do quiz está undefined!");
  } else {
    quizModel
      .perfilQuiz(perfilLeitor, idUsuario, idQuizHabitos)
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
      });
  }
}

module.exports = {
  quizEnsinamentos,
  // ultimaPontuacao,
  quizHabitos
};
