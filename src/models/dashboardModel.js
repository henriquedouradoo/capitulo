var database = require("../database/config");

function ultimaPontuacao(idUsuario) {
  var instrucaoSql = `
    SELECT 
      qe.pontuacao,
      qe.dtResposta
    FROM quizEnsinamentos qe
    WHERE qe.fkUsuario = ${idUsuario}
    ORDER BY qe.dtResposta DESC
    LIMIT 1;
  `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  ultimaPontuacao,
};
