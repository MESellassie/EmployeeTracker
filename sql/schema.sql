DROP DATABASE IF EXISTS employee_DB;
CREATE DATABASE employee_DB;
USE employee_DB;

CREATE TABLE department (
id INT NOT NULL AUTO_INCREMENT,
PRIMARY KEY(id),
name VARCHAR(30)
);

CREATE TABLE role (
id INT NOT NULL AUTO_INCREMENT,
PRIMARY KEY(id),
title VARCHAR(30),
force_points DECIMAL(65,3),
department_id INT,
CONSTRAINT fk_id FOREIGN KEY (id) REFERENCES department(id)
);

CREATE TABLE employee (
id INT NOT NULL AUTO_INCREMENT,
PRIMARY KEY(id),
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INT,
manager_id INT,
CONSTRAINT fk_role_id FOREIGN KEY (role_id) REFERENCES role(id)
);

SELECT * FROM employee;
SELECT * FROM role;
SELECT * FROM department;