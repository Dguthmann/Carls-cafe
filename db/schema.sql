CREATE DATABASE carls_db;
USE carls_db;

CREATE TABLE burger
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	eaten BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
