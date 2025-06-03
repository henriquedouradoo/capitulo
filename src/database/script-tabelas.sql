create database capitulo;
use capitulo;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar(45) not null,
sobrenome varchar(45) not null,
email varchar(255) not null unique,
senha varchar(100) not null,
dtCadastro datetime default current_timestamp
);

select * from usuario;

create table interacaoVersiculo (
idInteracaoVersiculo int primary key auto_increment,
referencia varchar(50),
interacao varchar(20) not null,
constraint tipoInteracao check(interacao in('visualizado', 'favoritado', 'refletido')),
anotacao text,
dtInteracao datetime default current_timestamp,
fkUsuario int,
foreign key (fkUsuario) references usuario(idUsuario)
);

select * from interacaoVersiculo;

select interacao as tipo, count(*) as total from interacaoVersiculo where fkUsuario = 5 group by interacao;

SELECT interacao AS tipo, COUNT(*) AS total
FROM interacaoVersiculo
WHERE fkUsuario = 5
GROUP BY interacao
ORDER BY total DESC
LIMIT 1;

insert into interacaoVersiculo (referencia, interacao, anotacao, dtInteracao, fkUsuario) values
('Salmos 114:5-5', 'refletido', 'Testando anotação', '2025-05-28:15:00:07', 5);

insert into interacaoVersiculo (referencia, interacao, anotacao, dtInteracao, fkUsuario) values
('Provérbios 14:5-5', 'refletido', 'Testando anotação', '2025-05-27:15:00:07', 5);

insert into interacaoVersiculo (referencia, interacao, anotacao, dtInteracao, fkUsuario) values
('Genêsis 20:1-9', 'Favoritado', 'Testando anotação', '2025-05-26:13:00:07', 5);

insert into interacaoVersiculo (referencia, interacao, anotacao, dtInteracao, fkUsuario) values
('Genêsis 20:1-9', 'Favoritado', 'Testando anotação', '2025-05-29:13:00:07', 5);

insert into interacaoVersiculo (referencia, interacao, anotacao, dtInteracao, fkUsuario) values
('Salmos 115:1-7', 'refletido', 'Testando anotação', '2025-05-28:16:00:17', 5),
('Salmos 104:3-7', 'favoritado', 'Testando anotação', '2025-05-28:17:00:57', 5);

select COUNT(iv.anotacao) as Total from interacaoVersiculo iv where iv.fkUsuario = 5;

select COUNT(iv.interacao) as Interacao from interacaoVersiculo iv where iv.fkUsuario = 5;


SELECT DATE_FORMAT(dtInteracao, '%d/%m') AS dia, COUNT(*) AS total
    FROM interacaoVersiculo
    WHERE fkUsuario = 5
      AND anotacao IS NOT NULL
      AND anotacao != ''
    GROUP BY dia
    ORDER BY dia asc;



create table quizHabito (
idQuizHabito int primary key auto_increment,
perfil varchar(50),
dtResposta datetime default current_timestamp,
fkUsuario int,
foreign key (fkUsuario) references usuario(idUsuario)
);

select * from quizHabito;

create table quizEnsinamentos (
idQuizEnsinamentos int primary key auto_increment,
pontuacao int,
dtResposta datetime default current_timestamp,
fkUsuario int,
foreign key (fkUsuario) references usuario(idUsuario)
);

select * from quizEnsinamentos;

select * from usuario u join quizEnsinamentos q on q.fkUsuario = u.idUsuario;

select qe.pontuacao AS "Última Pontuação", qe.dtResposta AS "Data de Resposta" from quizEnsinamentos qe JOIN usuario u ON u.idUsuario = qe.fkUsuario;

SELECT 
  qe.pontuacao,
  qe.dtResposta
FROM quizEnsinamentos qe JOIN usuario u ON u.idUsuario = qe.fkUsuario
WHERE qe.fkUsuario = u.idUsuario -- você coloca aqui o ID do usuário logado
ORDER BY qe.dtResposta DESC
LIMIT 1;

SELECT qh.perfil, qh.dtResposta FROM quizHabito qh JOIN usuario u ON u.idUsuario = qh.fkUsuario 
WHERE qh.fkUsuario = u.idUsuario ORDER BY qh.dtResposta DESC LIMIT 1;

select * from usuario;