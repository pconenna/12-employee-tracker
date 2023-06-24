const inquirer = require('inquirer')
const db = require('./db/queries')
function init(){
    /* create promts for 
    view all dpetartments 
    view all roles
    view all employees
    add department
    add role
    add employee
    update employee role*/
    

    inquirer.prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'actions',
            choices:[
                {
                    name:'View All Departments',
                    value:'viewDepts'
                },
                {
                    name:'View All Roles',
                    value:'viewRoles'
                },
                {
                    name:'View All Employees',
                    value:'viewEmployees'
                },
                {
                    name:'Add A Department',
                    value:'addDept'
                },
                {
                    name:'Add A Role',
                    value:'addRole'
                },
                {
                    name:'Add An Employee',
                    value:'addEmployee'
                },
                {
                    name:`Update An Employee's Role`,
                    value:'updateEmployee'
                },
            ]
        }
    ]).then((response)=>{
        if(response.actions == 'viewDepts'){
             getDepts();
        }
        else if(response.actions == 'viewRoles'){
           getRoles();
        }
        else if(response.actions == 'viewEmployees'){
            getEmployees();
        }
        else if(response.actions == 'addDept'){
            addDeptInfo();
        }
        else if(response.actions == 'addRole'){
            console.log("user chose add role")
        }
        else if(response.actions == 'addEmployee'){
            console.log("user chose add employee")
        }
        else if(response.actions == 'updateEmployee'){
            console.log("user chose update employee")
        }
    })
}
init();

function getDepts(){
    db.viewDepartments().then(([rows]) =>{
        console.table(rows)
     }).then(()=>init())
}
function getRoles(){
    db.viewRoles().then(([rows]) =>{
        console.table(rows)
     }).then(()=>init())
}
function getEmployees(){
    db.viewEmployees().then(([rows]) =>{
        console.table(rows)
     }).then(()=>init())
}
function addDeptInfo(){
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the department?',
            name: 'name'
        }
    ]).then((response)=>{
        db.addDept(response.name).then(console.log(`Added the ${response.name} department.`))
    })
}