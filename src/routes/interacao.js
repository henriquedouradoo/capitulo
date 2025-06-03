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

router.get("/interacoestotal/:idUsuario", function (req, res) {
  interacaoController.contagemInteracoesPorTipo(req, res);
});

router.get("/interacaofrequente/:idUsuario", function (req, res) {
  interacaoController.frequenciaInteracao(req, res);
}); 

router.get("/listarAnotacoes/:idUsuario", function (req, res) {
  interacaoController.listarAnotacoes(req, res);
}); 

module.exports = router;