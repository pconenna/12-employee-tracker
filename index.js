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
             db.viewDepartments().then(([rows]) =>{
                console.table(rows)
             }).then(()=>init())
        }
        else if(response.actions == 'viewRoles'){
            console.log("user chose view roles")
        }
        else if(response.actions == 'viewEmployees'){
            console.log("user chose view employees")
        }
        else if(response.actions == 'addDept'){
            console.log("user chose add department")
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