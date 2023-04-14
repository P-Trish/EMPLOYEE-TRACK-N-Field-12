-- WHEN I choose to view all departments
-- THEN I am presented with a formatted table showing department names and department ids

SELECT * FROM department;

-- WHEN I choose to view all roles
-- THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role

SELECT 
    role.title, 
    role.id, 
    department.name AS department,
    role.salary
FROM 
    role 
LEFT JOIN 
    department ON role.department_id = department.id;

-- WHEN I choose to view all employees
-- THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to

SELECT 
employee.id,
employee.first_name,
employee.last_name,
role.title,
department.name AS department,
role.salary,
CONCAT(manager.first_name, ' ', manager.last_name) AS manager
FROM employee
LEFT JOIN 
    role ON employee.role_id = role.id
LEFT JOIN 
department ON role.department_id = department.id
LEFT JOIN employee manager ON manager.id = employee.manager_id;

INSERT INTO employee (first_name, last_name, role_id, manager_id) 
    VALUES  (?, ?, ?, ?);

INSERT INTO role (title, salary, department_id) 
    VALUES (?,?,?);

INSERT INTO department (name) 
    VALUES (?);