var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/ultimaPontuacao", function (req, res) {
    dashboardController.ultimaPontuacao(req, res);
});

module.exports = router;