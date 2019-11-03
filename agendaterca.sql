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