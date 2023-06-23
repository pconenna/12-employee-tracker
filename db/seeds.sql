USE workplace_db;
INSERT INTO department(name)
VALUES 
('Engineering'),
('Marketing'),
('Legal'),
('Financial'),
('Customer Support');

INSERT INTO role (title, salary, department_id)
VALUES 
('Lead Software Engineer',180000,1),
('Software Engineer',120000,1),
('Junior Software Engineer',70000,1),
('Chief Marketing Officer',180000,2),
('Content Marketing Specialist',100000,2),
('Lead Lawyer',300000,3),
('Lawyer',200000,3),
('Lead Accountant',120000,4),
('Accountant',90000,4),
('Customer Support Lead',70000,5),
('Customer Support Technician',50000,5);

INSERT INTO employee(first_name, last_name, role_id,manager_id)
VALUES
('Peter','Conenna',1,null),
('Craig','Johnson',2,1),
('Jennifer','Martinez',4,null),
('Christina','Jackson',5,3),
('Nathan','Glancy',6,null),
('Max','Chan',7,5),
('Agnes','Hardy',8,null),
('Riley','Green',9,7),
('Sarah','Cahill',10,null),
('Isabel','Castellanos',11,9);
