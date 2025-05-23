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

create table versiculo (
idVersiculo int,
livro varchar(45) not null,
versiculo int not null,
interacao varchar(20) not null,
constraint tipoInteracao check(interacao in('visualizado', 'favoritado', 'refletido')),
dtInteracao datetime default current_timestamp,
pkUsuario int,
constraint pkVersiculo primary key (idVersiculo, pkUsuario),
constraint fkVersiculoUsuario foreign key (pkUsuario) references usuario(idUsuario)
);

select * from versiculo;

create table quiz (
idQuiz int primary key auto_increment,
pergunta int,
pontuacao int,
dtResposta datetime default current_timestamp,
fkUsuario int,
constraint fkQuizUsuario foreign key (fkUsuario) references usuario(idUsuario)
);

select * from quiz;

