
const questions = [

    {
        type: 'list',
        name: 'mainMenu',
        message: 'What would you like to do?',
        choices: ['View All Employees', 'Add Employees','Update Employee Role','View All Roles','Add Role','View All Departments','Add Department', 'Quit']
    }
];


// Add Employee
//What is the employee's first name?
// What is the employee's last name?
// What is the employee's role?
// NEED MENU SCROLL FOR EMPLOYEE'S ROLE
// Who is the employee's manager?
// NEED MENU SCROLL FOR EMPLOYEE'S MANAGER 

// *** console.log (Added (new employee) to the database)

const addEmployee = [
    {
        type: 'input',
        name: 'firstName',
        message: 'What is the employee\'s first name?',
    },
    {
        type: 'input',
        name: 'lastName',
        message: 'What is the employee\'s last name?',
    },
    {
        type: 'list',
        name: 'role',
        message: 'What is the employee\'s role?',
        choices: ['Manager', 'Production Staff', 'Writing Staff', 'Stage Crew',]
    },
    {
        type: 'list',
        name:'manager',
        message: 'Who is the employee\'s manager?',
        choices: ['Liziel Corate', 'Jamie Dino', 'Emily Cronk']
    }
]



// Update Employee Role
// Which employee's role do you want to update?
// NEED MENU SCROLL FOR EXISTING EMPLOYEE'S TO CHOOSE FROM 
// Which role do you want to assign to the employee?
// NEED MENU SCROLL FOR EXISTING ROLES TO CHOOSE FROM
// console.log (Updated employee's role)

const updateEmployeeRole = [
    {
        type: 'input',
        name: 'employeeToUpdate',
        message: 'Which employee\'s role do you want to update?',
        choices: ['Liziel Corate', 'Jamie Dino', 'Emily Cronk', 'Izarra Alberto', 'Levi Celestino', 'Felisa Vinluan' ]
    },
    {
        type: 'list',
        name: 'roleAssignment',
        message: 'Which role do you want to assign to the employee?',
        choices: ['Manager', 'Production Staff', 'Writing Staff', 'Stage Crew',]
    },
]



// Add Role
// What is the name of the role?
// What is the salary of the role?
// What department does the role belong to?
// NEED MENU SCROLL FOR ROLES
// console.log (Added (new role) to the database)

const addRole = [
    {
        type: 'input',
        name: 'roleName',
        message: 'What is the name of the role?',
    },
    {
        type: 'input',
        name:'salary',
        message: 'What is the salary of the role?',
    },
    {
        type: 'list',
        name: 'department',
        message: 'What department does the role belong to?',
        choices: ['Production Office', 'Writers', 'Post-Production',]
    }

]



// Add Department
// What is the name of the department?
// console.log(Added (department name) to the database)

const addDepartment = [
    {
        type: 'input',
        name: 'departmentName',
        message: 'What is the name of the department to add?',
    }
]


module.exports = {
    questions,
    addEmployee,
    updateEmployeeRole,
    addRole,
    addDepartment
}