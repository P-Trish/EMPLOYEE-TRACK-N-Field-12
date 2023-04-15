
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
    addRoleQuestions,
    addDepartmentQuestions
}