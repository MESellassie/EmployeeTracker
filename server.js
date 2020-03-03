// const connection = require("../config/connection.js");
const express = require("express");
const inquirer = require("inquirer");

// Set up MySQL connection.
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Ephesians611!",
  database: "employee_DB"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


// command-line that allows user to view departments, roles, and employees
const fullView = [
    "View Employees",
    "Update Employees",
    "View Employee Departments",
    "View Employee Roles",
    "Exit View"
];

// command-line that displays the current list of employees so that the user can update an employee
const employeeList = [
    "Anakin Skywalker",
    "Mace Windu",
    "Yoda",
    "Obi-Wan Kenobi",
    "Kit Fisto",
    "Shaak Ti",
    "Plo Koon",
    "Darth Sidious",
    "Exit List"
];

// command-line that allows the user to update employee roles
const employeeUpdateOptions = [
    "Update Employee First Name",
    "Update Employee Last Name",
    "Update Employee Role",
    "Exit Update"
];

start();

function start() {
    inquirer.prompt({
        name: "task",
        type: "list",
        message: "What would you like to do?",
        choices: fullView

    })
    .then(function (answer) {
        switch (answer.task) {
            case fullView[0]: viewEmployee();
            break;

            case fullView[1]: employeeUpdateOptions();
            break;

            case fullView[2]: viewDepartment();
            break;

            case fullView[3]: viewRole();
            break;

            case fullView[4]: connection.end();
            break

        }
    })
}


function viewEmployee() {
    console.log("Viewing Employees");
    let selectVal = "SELECT first_name, last_name, title, name AS department, force_points, CONCAT(first_name, ' ' last_name) AS manager FROM employee";
    selectVal += "LEFT JOIN role ON employee.role_id = role.id";
    selectVal += "LEFT JOIN department ON department.id = role.department_id";
    selectVal += "LEFT JOIN employee ON manager.id = employee.manager_id"
    connection.query(selectVal, (err, res) => {
        if(err) throw err;
        console.table(res);
        console.log(res)
        start();
    })
}

const updateEmpFunction = () => {
    console.log("Updating Employees");
    let selectVal = "SELECT first_name, last_name, title, name AS department, force_points, CONCAT(first_name, ' ' last_name) AS manager FROM employee";
    selectVal += "LEFT JOIN role ON employee.role_id = role.id";
    selectVal += "LEFT JOIN department ON department.id = role.department_id";
    selectVal += "LEFT JOIN employee ON manager.id = employee.manager_id"
    function empUpdate() {
        inquirer.prompt({
            name: "task",
            type: "list",
            message: "Which employee would you like to update?",
            choices: employeeList
        })
    }
    empUpdate();
}

function viewDepartment() {
    let selectVal = "SELECT * FROM department";
    connection.query(selectVal, (err, result) => {
        if (err) throw err;
        console.log(result)
        start();
    })
}

function viewRole() {
    let selectVal = "SELECT * FROM role";
    connection.query(selectVal, (err, result) => {
        if (err) throw err;
        console.log(result)
        start();
    })
}
