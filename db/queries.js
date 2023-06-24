const connection = require('./connection')
class DB{
    constructor(connection){
        this.connection = connection;
    }
    viewDepartments(){
        return this.connection.promise().query(`SELECT * FROM department`)
    }
    viewRoles(){
        return this.connection.promise().query(`SELECT * FROM role`)
    }
    viewEmployees(){
        return this.connection.promise().query(`SELECT * FROM employees`)
    }
    addEmployee(fName,lName,role_id,manager_id){
        return this.connection.promise().query(`INSERT INTO employee VALUES (?,?,?,?)`, fName,lName,role_id,manager_id)
    }
    addRole(title, salary, department_id){
        return this.connection.promise().query(`INSERT INTO employee VALUES (?,?,?)`, title, salary, department_id)
    }
    addDept(name){
        return this.connection.promise().query(`INSERT INTO employee VALUES (?)`,name)
    }
    updateEmployee(role_id, employee_id){
        return this.connection.promise().query(`UPDATE employee SET role_id = ? WHERE id = ? `,role_id, employee_id)
    }
}

module.exports = new DB(connection);