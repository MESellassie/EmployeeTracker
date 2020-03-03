// const connection = require("../config/connection.js");
const express = require("express");
const inquirer = require("inquirer");

// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
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
const updateEmployee = [
    "Update Employee First Name",
    "Update Employee Last Name",
    "Update Employee Role",
    "Exit Update"
];

start();

start() => {
    inquirer.prompt({
        name: "task",
        type: "list",
        message: "What would you like to do?",
        choices: fullView

    })
    .then(answer) => {
        switch (answer.task) {
            case.fullView[0]: viewEmployee();
            break;
        }
    }
}


function viewEmployee() {
    console.log("Viewing Employees");
    const selectVal = "SELECT first_name, last_name, title, force_points FROM employee";
    selectVal += "LEFT JOIN role ";
    selectVal += "On empoyee.role_id = role.id"
    connection.query(selectVal, (err, result) => {
        if(err) throw err;
        console.log(result)
        start();
    })
}

