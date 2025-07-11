var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/ultimaPontuacao", function (req, res) {
    dashboardController.ultimaPontuacao(req, res);
});

router.get("/perfilLeitor", function (req, res) {
    dashboardController.perfilLeitor(req, res);
});

router.get("/historicoPerfil", function (req, res) {
    dashboardController.historicoPerfil(req, res);
});

router.get("/dadosPerfil", function(req, res) {
    dashboardController.dadoPerfil(req, res);
});

// router.post("/perguntar", function (req, res) {
//     iaController.gerarResposta(req, res);
// })

module.exports = router;