// add all required modules

const inquirer = require('inquirer');

require('console.table');

const connection = require('./config/connection');

const Queries = require('./lib/queries');
const {
    questions,
    addEmployeeQuestions,
    addRoleQuestions,
    addDepartmentQuestions,
    updateEmployeeRoleQuestions
} = require('./lib/questions');

const sql = new Queries();

function mainMenu() {
    inquirer.prompt(questions)
        .then((response) => {
            switch (response.mainMenu) {
                case 'View All Employees':
                    viewAllEmployees();
                    break;
                case 'View All Roles':
                    viewAllRoles();
                    break;
                case 'View All Departments':
                    viewAllDepartments();
                    break;
                case 'Add Employee':
                    addEmployee();
                    break;
                case 'Add Role':
                    addRole();
                    break;
                case 'Add Department':
                    addDepartment();
                    break;
                case 'Update Employee Role':
                    updateEmployeeRole();
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
            console.log('\n');
            mainMenu();
        });
}
// View All Roles
function viewAllRoles() {
    connection.promise().query(sql.viewAllRoles)
        .then(([rows, fields]) => {
            console.log('\n');
            console.table(rows);
            console.log('\n');
            mainMenu();
        });
}
// View All Departments
function viewAllDepartments() {
    connection.promise().query(sql.viewAllDepartments)
        .then(([rows, fields]) => {
            console.log('\n');
            console.table(rows);
            console.log('\n');
            mainMenu();
        });
}
// Add Employee
const roles = ['Production Manager', 'Writing Producer', 'Staff Writer', 'Editor', 'Production Coordinator', 'Post Supervisor', 'Other'];

const managers = ['Liziel Corate', 'Jamie Dino', 'Emily Cronk'];

async function addEmployee() {
    await inquirer.prompt(addEmployeeQuestions)
        .then((response) => {
            const roleId = roles.findIndex(role => role === response.role) + 1;
            const managerId = managers.findIndex(manager => manager === response.manager) + 1;
            connection.promise().query(sql.addEmployee, [response.firstName, response.lastName, roleId, managerId])
                .then(() => {
                    console.log('\n');
                    console.log(`Added ${response.firstName} ${response.lastName} to the database!`);
                    console.log('\n');
                    mainMenu();
                });
        })
};
// Add Role
const departments = ['Production Office', 'Writers', 'Post-Production'];

async function addRole() {
    await inquirer.prompt(addRoleQuestions)
        .then((response) => {
            const departmentId = departments.findIndex(department => department === response.department) + 1;
            connection.promise().query(sql.addRole, [response.title, response.salary, departmentId])
                .then(() => {
                    console.log('\n');
                    console.log(`Added ${response.title} to the database!`);
                    console.log('\n');
                    mainMenu();
                })
        })
};

// Add Department
async function addDepartment() {
    await inquirer.prompt(addDepartmentQuestions)
        .then((response) => {
            connection.promise().query(sql.addDepartment, response.departmentName)
                .then(() => {
                    console.log('\n');
                    console.log(`Added ${response.departmentName} to the database!`);
                    console.log('\n');
                    mainMenu();
                })
        })
};

// Update Employee Role
async function updateEmployeeRole() {
    let employees = [];
    const employeeRoles = [];
    await connection.promise().query(sql.getAllEmployeeNames)
        .then(([rows, fields]) => {
            rows.forEach((employee) => {
                employees.push(employee.first_name + ' ' + employee.last_name);
            });

            inquirer.prompt({
                type: 'list',
                name: 'employeeToUpdate',
                message: 'Which employee\'s role do you want to update?',
                choices: employees
            }).then((employee) => {
                connection.promise().query(sql.getAllTitles)
                    .then(([rows, fields]) => {
                        rows.forEach((role) => {
                            employeeRoles.push(role.title);
                        })
                        inquirer.prompt({
                            type: 'list',
                            name: 'roleAssignment',
                            message: 'Which role do you want to assign to the employee?',
                            choices: employeeRoles
                        })
                            .then((role) => {
                                // console.log(employee, role);
                                // { employeeToUpdate: 'Liziel Corate' } { roleAssignment: 'Production Manager' }
                                const name = employee.employeeToUpdate.split(' ');
                                // console.log(name);
                                // [ 'Liziel', 'Corate' ]
                                const roleId = roles.findIndex(roleEl => roleEl === role.roleAssignment) + 1;
                                connection.promise().query(sql.updateEmployeeRole, [roleId, name[0], name[1]])
                                console.log(`${name[0]} ${name[1]} has been updated to ${role.roleAssignment}`);
                                console.log('\n');
                                mainMenu();
                            });
                    })
            });
        })
};

mainMenu();




