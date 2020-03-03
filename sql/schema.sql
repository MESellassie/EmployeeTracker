DROP DATABASE IF EXISTS employee_DB;
CREATE DATABASE employee_DB;
USE employee_DB;

CREATE TABLE employee (
id INT NOT NULL AUTO_INCREMENT,
PRIMARY KEY(id),
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INT,
manager_id INT
);

CREATE TABLE role (
id INT NOT NULL AUTO_INCREMENT,
PRIMARY KEY(id),
salary DECIMAL(40,3),
department_id INT
);

CREATE TABLE department (
id INT NOT NULL AUTO_INCREMENT,
PRIMARY KEY(id),
name VARCHAR(30)
);