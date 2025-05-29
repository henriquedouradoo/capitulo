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
dtInteracao datetime default current_timestamp,
fkUsuario int,
foreign key (fkUsuario) references usuario(idUsuario)
);

select * from interacaoVersiculo;

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
