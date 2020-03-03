INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Anakin", "Skywalker", 2, 19), ("Mace", "Windu", 1, 2), ("Yoda", " ", 1, 1), ("Obi-Wan", "Kenobi", 2, 7), ("Kit", "Fisto", 2, 8), ("Shaak", "Ti", 2, 5), ("Plo", "Koon", 1, 3), ("Darth", "Sidious", 1, 1);

SELECT * FROM employee;

INSERT INTO role (title, salary, department_id)
VALUES ("Apprentice", 45000, 66), ("Jedi Master", 110000, 48), ("Jedi Master", 150000, 5000), ("Jedi Master", 72000, 32), ("Jedi Master", 65000, 39), ("Jedi Master", 650000, 31), ("Jedi Master", 89000, 59), ("Sith Lord", 120000000, 66);

SELECT * FROM role;

INSERT INTO department (name)
VALUES ("Jedi Order"), ("Jedi Order"), ("Jedi Order"), ("Jedi Order"), ("Jedi Order"), ("Jedi Order"), ("Jedi Order"), ("Sith Order");

SELECT * FROM department;