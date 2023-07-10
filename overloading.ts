class Employee {
    empId: number;
    empName: string;
    empSalary:number;
    isTransportAvailable?:boolean;
    

    constructor(Id: number, name: string,salary:number,transport?:boolean) {
            this.empName = name;
            this.empId = Id;
            this.empSalary = salary;
            this.isTransportAvailable = transport;
           

    }
    public  findEmployees(location:String):any;
    public  findEmployees(contactNo:Number):any;
    
    public findEmployees(arg:any):any{
    if (typeof this.isTransportAvailable!== 'undefined') {
        return `ID = ${this.empId},Name = ${this.empName},isTransportAvailable = ${this.isTransportAvailable},Location/ContactNo =${arg}`
    } else {
        return `ID = ${this.empId},Name = ${this.empName},Location/ContactNo = ${arg}`
    }
    }
    
    }
    const radha = new Employee ( 10,'Radha',400000,true);
    console.log("-"+radha.findEmployees('Pune'));
    console.log("-"+radha.findEmployees(12345667777));
    const avanti = new Employee (30,'Avanti',600000);
    console.log("-"+avanti.findEmployees('Goa'));
    console.log("-"+avanti.findEmployees(123475432));
    