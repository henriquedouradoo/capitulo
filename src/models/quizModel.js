var database = require("../database/config")

function finalizarJogo(pontuacao, idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function quizEnsinamentos():", pontuacao, idUsuario);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT quizEnsinamentos (fkUsuario, pontuacao) VALUES
        ('${idUsuario}', '${pontuacao}');
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql, [pontuacao, idUsuario]);
}

function ultimaPontuacao(idUsuario) {
    const instrucao = `
    SELECT pontuacao, dtResposta FROM quizEnsinamentos WHERE fkUsuario = ${idUsuario};
  `;

    console.log('Executando a instrução SQL: \n' + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    finalizarJogo,
    ultimaPontuacao
};