INSERT INTO department (name)
VALUES ("Jedi Order"), ("Jedi High Council"), ("Jedi High Council"), ("Jedi Order"), ("Jedi Order"), ("Jedi Order"), ("Jedi High Council"), ("Sith Order");

SELECT * FROM department;

INSERT INTO role (title, force_points, department_id)
VALUES ("Padawan", 130000, 66), ("Jedi Councelor", 120000, 48), ("Jedi Councelor", 200000, 5000), ("Jedi Master", 110000, 32), ("Jedi Master", 98000, 39), ("Jedi Master", 78000, 31), ("Jedi Councelor", 100000, 59), ("Sith Lord", 200000, 66);

SELECT * FROM role;

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Anakin", "Skywalker", 2, 19), ("Mace", "Windu", 1, 2), ("Yoda", " ", 1, 1), ("Obi-Wan", "Kenobi", 2, 7), ("Kit", "Fisto", 2, 8), ("Shaak", "Ti", 2, 5), ("Plo", "Koon", 1, 3), ("Darth", "Sidious", 1, 1);

SELECT * FROM employee