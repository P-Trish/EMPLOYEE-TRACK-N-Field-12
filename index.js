// add all required modules

const inquirer = require('inquirer');

require('console.table');
 
const connection = require('./config/connection');

const Queries = require('./lib/queries');

const sql = new Queries();

connection.promise().query (sql.viewAllEmployees)
.then( ([rows, fields]) => {
    console.table(rows);
});
// Acceptance Criteria

// GIVEN a command-line application that accepts user input

// QUERIES AS A TYPE: LIST
// WHEN I start the application
// THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role



// QUERY TYPE: INPUT
// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database

// QUERY TYPE: INPUT
// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database

// QUERY TYPE: INPUT
// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database


// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database
