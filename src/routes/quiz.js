var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

//Recebendo os dados do html e direcionando para a função cadastrar de quizController.js
router.post("/quizEnsinamentos", (req, res) => {
    quizController.quizEnsinamentos(req, res);
})

router.post("/quizHabitos", (req, res) => {
    quizController.quizHabitos(req, res);
});

module.exports = router;