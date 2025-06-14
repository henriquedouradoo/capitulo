var database = require("../database/config");

function interacaoVersiculo(idUsuario, anotacao, status, localizacao) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function interacaoVersiculo():",
    idUsuario,
    anotacao,
    status,
    localizacao
  );

  // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
  //  e na ordem de inserção dos dados.
  var instrucaoSql = `
        INSERT interacaoVersiculo (anotacao, interacao, referencia, fkUsuario) VALUES
        ('${anotacao}', '${status}', '${localizacao}', '${idUsuario}');
    `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql, [
    idUsuario,
    anotacao,
    status,
    localizacao,
  ]);
}

function totalAnotacao(idUsuario) {
  var instrucaoSql = `
    select COUNT(iv.anotacao) as Total from interacaoVersiculo iv 
    WHERE iv.fkUsuario = ${idUsuario};
  `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function anotacoesPorDia(idUsuario) {
  const instrucaoSql = `
      SELECT 
      DATE_FORMAT(data_interacao, '%d/%m') AS dia,
      COUNT(*) AS total
    FROM (
      SELECT DATE(dtInteracao) AS data_interacao
      FROM interacaoVersiculo
      WHERE fkUsuario = ${idUsuario}
        AND anotacao IS NOT NULL
        AND anotacao != ''
    ) AS sub
    GROUP BY data_interacao
    ORDER BY data_interacao DESC
    LIMIT 3;
  `;

  console.log("Executando SQL:", instrucaoSql);
  return database.executar(instrucaoSql);
}

function contagemInteracoesPorTipo(idUsuario) {
  const instrucaoSql = `
    SELECT interacao AS tipo, COUNT(*) AS total
    FROM interacaoVersiculo
    WHERE fkUsuario = ${idUsuario}
    GROUP BY interacao;
  `;
  return database.executar(instrucaoSql);
}

function frequenciaInteracao(idUsuario) {
  const instrucaoSql = `
    SELECT interacao AS tipo, COUNT(*) AS total
    FROM interacaoVersiculo
    WHERE fkUsuario = ${idUsuario}
    GROUP BY interacao
    ORDER BY total DESC
    LIMIT 1;
  `;
  return database.executar(instrucaoSql);
}

function listarAnotacoes(idUsuario) {
  const instrucaoSql = `
  Select iv.interacao as tipo, iv.referencia, iv.anotacao,
   iv.dtInteracao as dataInteracao from interacaoVersiculo iv WHERE fkUsuario = ${idUsuario}; 
  `;
  return database.executar(instrucaoSql);
}

module.exports = {
  interacaoVersiculo,
  totalAnotacao,
  anotacoesPorDia,
  contagemInteracoesPorTipo,
  frequenciaInteracao,
  listarAnotacoes
};
