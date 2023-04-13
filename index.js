// add all required modules

const inquirer = require('inquirer');

require('console.table');

const connection = require('./config/connection');

const Queries = require('./lib/queries');
const questions = require('./lib/questions');
const sql = new Queries();

function mainMenu() {
    inquirer.prompt(questions)
        .then((response) => {
            switch (response.mainMenu) {
                case 'View All Employees':
                 viewAllEmployees ();
                    break;
                case 'View All Roles':
                    viewAllRoles();
                    break;
                case 'View All Departments':
                    viewAllDepartments();
                    break;
                case 'Quit':
                    console.log('Goodbye!');
                    connection.end();
                    return;
                default:
                    console.log('Please select a valid option!');
                    mainMenu();
                    return;



            }
        })
        .catch((err) => console.error(err));
}

function viewAllEmployees() {
    connection.promise().query(sql.viewAllEmployees)
        .then(([rows, fields]) => {
            console.log('\n');
            console.table(rows);
            mainMenu();
        });
}
// View All Roles
function viewAllRoles() {
    connection.promise().query(sql.viewAllRoles)
        .then(([rows, fields]) => {
            console.log('\n');
            console.table(rows);
            mainMenu();
        });
}
// View All Departments
function viewAllDepartments() {
    connection.promise().query(sql.viewAllDepartments)
        .then(([rows, fields]) => {
            console.log('\n');
            console.table(rows);
            mainMenu();
        });
}

mainMenu();



// Acceptance Criteria

// GIVEN a command-line application that accepts user input



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


// Bonus
// Fulfilling any of the following can add up to 20 points to your grade. Note that the highest grade you can achieve is still 100:

// Application allows users to update employee managers (2 points).

// Application allows users to view employees by manager (2 points).

// Application allows users to view employees by department (2 points).

// Application allows users to delete departments, roles, and employees (2 points for each).

// Application allows users to view the total utilized budget of a department—in other words, the combined salaries of all employees in that department (8 points).
