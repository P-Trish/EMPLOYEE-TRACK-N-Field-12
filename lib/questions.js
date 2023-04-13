
const questions = [

    {
        type: 'list',
        name: 'mainMenu',
        message: 'What would you like to do?',
        choices: ['View All Employees', 'Add Employees','Update Employee Role','View All Roles','Add Role','View All Departments','Add Department', 'Quit']
    }
];

module.exports = questions;

// Add Employee
//What is the employee's first name?
// What is the employee's last name?
// What is the employee's role?
// NEED MENU SCROLL FOR EMPLOYEE'S ROLE
// Who is the employee's manager?
// NEED MENU SCROLL FOR EMPLOYEE'S MANAGER 
// console.log (Added (new employee) to the database)

// Update Employee Role
// Which employee's role do you want to update?
// NEED MENU SCROLL FOR EXISTING EMPLOYEE'S TO CHOOSE FROM 
// Which role do you want to assign to the employee?
// NEED MENU SCROLL FOR EXISTING ROLES TO CHOOSE FROM
// console.log (Updated employee's role)

// Add Role
// What is the name of the role?
// What is the salary of the role?
// What department does the role belong to?
// NEED MENU SCROLL FOR ROLES
// console.log (Added (new role) to the database)
// Add Department
// What is the name of the department?
// console.log(Added (department name) to the database)