INSERT INTO department (name) 
VALUES  ("Production Office"),
        ("Writers"),
        ("Post-Production");
        

INSERT INTO role (title, salary, department_id)
VALUES  ("Production Manager", 250000, 1),
        ("Show Runner", 500000, 2),
        ("Staff Writer", 125000, 2),
        ("Editor", 87000, 3 ),
        ("Production Coordinator", 65000, 1)
        ("Post Supervisor", 150000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES  ("Liziel", "Corate", 1, null),
        ("Izarra", "Alberto", 5, 1),
        ("Jamie", "Dino", 2, null),
        ("Levi", "Celestino",3, 3),
        ("Emily", "Cronk", 6, null),
        ("Felisa", "Vinluan", 4, 5);



    
