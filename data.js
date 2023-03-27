class employee{
    constructor(id,fname,lname,role,dob,salary){
        this.id=id;
        this.fname=fname;
        this.lname=lname;
        this.role=role;
        this.dob=dob;
        this.salary=salary;
        this.companyName="Deloitte";
        this.youngest=false;
        this.richest=false;
        this.bonus=0;
    }
}
const employeeInfo=[];
var emp1=new employee(103,'John','Wick','Level 1','10/10/1990',8000);
var emp2=new employee(101,'Sundar','P','Level 2','03/23/1993',5000);
var emp3=new employee(102,'Manpreet Singh','Pawar','Level 3','05/12/1987',10000);
var emp4=new employee(104,'Jemimah','Rodrigues','Level 2','09/05/2000',7000);

employeeInfo.push(emp1);
employeeInfo.push(emp2);
employeeInfo.push(emp3);
employeeInfo.push(emp4);



export {employeeInfo};

