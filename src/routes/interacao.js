var express = require("express");
var router = express.Router();

var interacaoController = require("../controllers/interacaoController");

router.post("/versiculo", function (req, res) {
    interacaoController.interacaoVersiculo(req, res);
})

router.get("/total/:idUsuario", function (req, res) {
    interacaoController.totalAnotacao(req, res);
})

router.get("/anotacoesdia/:idUsuario", function (req, res) {
  interacaoController.anotacoesPorDia(req, res);
});

module.exports = router;