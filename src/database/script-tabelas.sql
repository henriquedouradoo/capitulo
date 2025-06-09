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
