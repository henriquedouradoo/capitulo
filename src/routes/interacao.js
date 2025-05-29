var express = require("express");
var router = express.Router();

var interacaoController = require("../controllers/interacaoController");

router.post("/versiculo", function (req, res) {
    interacaoController.interacaoVersiculo(req, res);
})

module.exports = router;