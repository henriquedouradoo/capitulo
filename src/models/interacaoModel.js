var database = require("../database/config")

function interacaoVersiculo(idUsuario, anotacao, status, localizacao) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function interacaoVersiculo():", idUsuario, anotacao, status, localizacao);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT interacaoVersiculo (anotacao, interacao, referencia, fkUsuario) VALUES
        ('${anotacao}', '${status}', '${localizacao}', '${idUsuario}');
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql, [idUsuario, anotacao, status, localizacao]);
}

function totalAnotacao(idUsuario) {
  var instrucaoSql = `
    select COUNT(iv.anotacao) as Total from interacaoVersiculo iv 
    WHERE iv.fkUsuario = ${idUsuario};
  `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
    interacaoVersiculo,
    totalAnotacao
};