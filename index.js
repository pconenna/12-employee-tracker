const inquirer = require('inquirer')

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
        if(response == 'viewDepts'){
            // code to do requested action
        }
        else if(response == 'viewRoles'){
            // code to do requested action
        }
        else if(response == 'viewEmployees'){
            // code to do requested action
        }
        else if(response == 'addDept'){
            // code to do requested action
        }
        else if(response == 'addRole'){
            // code to do requested action
        }
        else if(response == 'addEmployee'){
            // code to do requested action
        }
        else if(response == 'updateEmployee'){
            // code to do requested action
        }
    })
}