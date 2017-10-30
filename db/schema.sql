CREATE DATABASE burgers2_db;

USE burgers2_db;
CREATE TABLE burgers(
	id INTEGER(11) AUTO_INCREMENT,
		burger_name TEXT not null,
		devoured BOOLEAN not null default FALSE,
		date TIMESTAMP not null,
		PRIMARY KEY (id)
);

