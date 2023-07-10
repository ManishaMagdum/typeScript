export class Employee {
    empId: number;
    empName: string;
    empSalary:number;
 
  

    constructor(Id: number, name: string,salary:number) {
            this.empName = name;
            this.empId = Id;
            this.empSalary = salary;
           
            

    }
    displayemployee(){
        console.log("empId =" + this.empId,"empName="+this.empName,"empSalary="+this.empSalary)
    }
   
    }