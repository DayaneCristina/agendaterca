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

create table type(
	id_type int,
    name varchar(255),
    constraint pk_id_type
		primary key (id_type)
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

create table contact(
	id_contact int auto_increment,
    contact varchar(255),
    id_type int,
    constraint pk_id_contato 
		primary key (id_contact),
	constraint fk_type_contact
		foreign key (id_type)
			references type(id_type)
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

insert into type values 
(1,'E-mail'),
(2,'Telefone Fixo'),
(3,'Telefone Celular'),
(4,'Telefone Comercial');

insert into people values 
(1,'Bruno','Silva','1998-08-06'),
(2,'Sergio','Tadeu','1997-09-10');

insert into user values 
(1,'Dayane','dayaneCristina@gmail.com','12345678',null),
(2,'Diones','diones@gmail.com','1234',null);

insert into contact values
(1,'bruno.silva.carvalho',1),
(2,'13997934483',3);

insert into contact_people values
(1,1),
(2,1);

insert into people_user values
(1,1),
(2,1),
(1,2);

SELECT people.* 
	FROM people_user 
		INNER JOIN people ON people.id_people = people_user.id_people  
        INNER JOIN user ON user.id_user = people_user.id_user 
			WHERE email = 'dayaneCristina@gmail.com' AND password = '12345678';
            
SELECT 
	people.name,
    people.nickname, 
	people.birthday,
    contact.contact, 
    type.name
		FROM  contact_people 
			INNER JOIN contact ON contact.id_contact = contact_people.id_contact
			INNER JOIN type ON type.id_type = contact.id_type
			INNER JOIN people ON people.id_people = contact_people.id_people
            INNER JOIN people_user ON people.id_people = people_user.id_people
				INNER JOIN user ON user.id_user = people_user.id_user 
					WHERE user.id_user = '1' AND people.id_people = '1';