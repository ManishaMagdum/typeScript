"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(Id, name, salary) {
        this.empName = name;
        this.empId = Id;
        this.empSalary = salary;
    }
    Employee.prototype.displayemployee = function () {
        console.log("empId =" + this.empId, "empName=" + this.empName, "empSalary=" + this.empSalary);
    };
    return Employee;
}());
exports.Employee = Employee;
