
const questions = [

    {
        type: 'list',
        name: 'mainMenu',
        message: 'What would you like to do?',
        choices: ['View All Employees', 'Add Employee','Update Employee Role','View All Roles','Add Role','View All Departments','Add Department', 'Quit']
    }
];

const addEmployeeQuestions = [
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
        choices: ['Production Manager', 'Writing Producer', 'Staff Writer', 'Editor', 'Production Coordinator', 'Post Supervisor', 'Other' ]
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

const updateEmployeeRoleQuestions = [
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
        choices: ['Production Manager', 'Writing Producer', 'Staff Writer', 'Editor', 'Production Coordinator', 'Post Supervisor', 'Other' ]
    },
]

const addRoleQuestions = [
    {
        type: 'input',
        name: 'title',
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

const addDepartmentQuestions = [
    {
        type: 'input',
        name: 'departmentName',
        message: 'What is the name of the department you would like to add?',
    }
]


module.exports = {
    questions,
    addEmployeeQuestions,
    updateEmployeeRoleQuestions,
    addRoleQuestions,
    addDepartmentQuestions
}