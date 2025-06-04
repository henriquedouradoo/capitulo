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

function perfilLeitor(idUsuario) {
  var instrucaoSql = `
    SELECT u.idUsuario, u.dtCadastro, qh.perfil, qh.dtResposta FROM quizHabito qh JOIN usuario u ON u.idUsuario = qh.fkUsuario 
    WHERE qh.fkUsuario = ${idUsuario} ORDER BY qh.dtResposta DESC LIMIT 1;
  `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

// function dadoPerfil(idUsuario) {
//   var instrucaoSql = `
//     SELECT u.dtCadastro, qh.perfil, qh.dtResposta FROM quizHabito qh JOIN usuario u ON u.idUsuario = qh.fkUsuario 
//     WHERE qh.fkUsuario = ${idUsuario} ORDER BY qh.dtResposta DESC LIMIT 1;
//   `;
// }

module.exports = {
  ultimaPontuacao,
  perfilLeitor
};
