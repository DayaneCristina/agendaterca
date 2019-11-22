create database agendaterca; -- cria o banco

use agendaterca; -- usar o banco

create table user(
	id_user int auto_increment,
    name varchar(255),
    email varchar(255),
    password varchar(255),
    apikey text,
    constraint pk_id_user
		primary key (id_user)
);

create table people(
	id_people int auto_increment, 
    name varchar(255),
    nickname VARCHAR(32),
	birthday DATE,
	email VARCHAR(255),
	phone VARCHAR(255),
	id_user int not null,
    constraint pk_id
		primary key (id_people),
	constraint fk_contact
		foreign key (id_user)
			references user(id_user)
);

insert into user (id_user, name, email, password, apikey) values 
(1,'Dayane','dayaneCristina@gmail.com','12345678',null),
(2,'Diones','diones@gmail.com','1234',null);


insert into people (id_people, name, nickname, birthday, email, phone, id_user) values 
(1,'Bruno','Silva','1998-08-06','bruno@gmail.com','+5513997934483',1),
(2,'Sergio','Tadeu','1997-09-10','sergio@gmail.com','+5513921321312',1);

SELECT user.* 
	FROM people   
        INNER JOIN user ON user.id_user = people.id_user 
			WHERE user.email = 'dayaneCristina@gmail.com' AND user.password = '12345678';