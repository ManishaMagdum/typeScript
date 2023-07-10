"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(Id, name, salary, transport, post) {
        this.empName = name;
        this.empId = Id;
        this.empSalary = salary;
        this.isTransportAvailable = transport;
        this.empPost = post;
    }
    return Employee;
}());
exports.Employee = Employee;
var nisha = new Employee(20, 'Nisha', 50000, false, 'Marketing Head');
console.log("empId= ".concat(nisha.empId, ",empName =").concat(nisha.empName, ",empSalary =").concat(nisha.empSalary, ",isTransportAvailable =").concat(nisha.isTransportAvailable, ",empPost = ").concat(nisha.empPost));
