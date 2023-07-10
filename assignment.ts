 class Emp{
    empId: number;
    empName: string;
    empSalary:number;
    isTransportAvailable?:boolean;
  

    constructor(Id: number, name: string,salary:number,transport?:boolean,post?:string) {
            this.empName = name;
            this.empId = Id;
            this.empSalary = salary;
            this.isTransportAvailable = transport;
         

    }
   
    }


const nisha = new Employee (20,'Nisha',50000,false);
console.log(`empId= ${nisha.empId},empName =${nisha.empName},empSalary =${nisha.empSalary},isTransportAvailable =${nisha.isTransportAvailable}`)