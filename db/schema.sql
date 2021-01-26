CREATE DATABASE ixmev0724ga0pr8j;

USE ixmev0724ga0pr8j;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN,
    PRIMARY KEY (id)
);