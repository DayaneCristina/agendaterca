-- SQL Server
create database agendaterca; -- cria o banco

use agendaterca; --usar o banco

create table people (
	id INT IDENTITY(1,1) PRIMARY KEY, --incrementar de um e um
	"name" VARCHAR(255),
	nickname VARCHAR(32),
	birthday DATE
);

create table phones (
	id INT IDENTITY (1,1) PRIMARY KEY, 
	phone VARCHAR (20),
	person_id INT,
	foreign key (person_id) references people(id)
);
create table email (
	id INT IDENTITY (1,1) PRIMARY KEY, 
	email VARCHAR (90),
	person_id INT,
	foreign key (person_id) references people(id)
);

insert into people("name",nickname,birthday) values ('Maria Joaquina', 'MJ', '1999-09-01');
insert into phones(phone, person_id) values ('1332326677',1);
insert into email(email, person_id) values ('mariajoaquina@carrossel.com.br', 1);

select * from people, phones, email where people.id=phones.person_id and people.id = email.person_id;

-- MYSQL 
create database agendaterca; -- cria o banco

use agendaterca; -- usar o banco

create table people(
	id_people int auto_increment, 
    name varchar(255),
    nickname VARCHAR(32),
	birthday DATE,
    constraint pk_id
		primary key (id_people)
);

create table contact(
	id_contact int auto_increment,
    contact varchar(255),
    tipy int,
    constraint pk_id_contato 
		primary key (id_contact)
);

create table tipy(
	id_tipy int,
    name varchar(255),
    constraint pk_id_tipy
		primary key (id_tipy)
);

create table user(
	id_user int auto_increment,
    name varchar(255),
    email varchar(255),
    password varchar(255),
    apikey text,
    constraint pk_id_user
		primary key (id_user)
);

create table contact_people(
	id_contact int,
    id_people int,
    constraint fk_contact_people
		foreign key (id_contact)
			references contact(id_contact),
	constraint fk_people_contact
		foreign key (id_people)
			references people(id_people)
);

create table people_user(
	id_people int,
    id_user int,
    constraint fk_user_people
		foreign key (id_user)
			references user(id_user),
	constraint fk_people_user
		foreign key (id_people)
			references people(id_people)
);