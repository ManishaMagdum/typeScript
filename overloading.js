var Employee = /** @class */ (function () {
    function Employee(Id, name, salary, transport) {
        this.empName = name;
        this.empId = Id;
        this.empSalary = salary;
        this.isTransportAvailable = transport;
    }
    Employee.prototype.findEmployees = function (arg) {
        if (typeof this.isTransportAvailable !== 'undefined') {
            return "ID = ".concat(this.empId, ",Name = ").concat(this.empName, ",isTransportAvailable = ").concat(this.isTransportAvailable, ",Location/ContactNo =").concat(arg);
        }
        else {
            return "ID = ".concat(this.empId, ",Name = ").concat(this.empName, ",Location/ContactNo = ").concat(arg);
        }
    };
    return Employee;
}());
var radha = new Employee(10, 'Radha', 400000, true);
console.log("-" + radha.findEmployees('Pune'));
console.log("-" + radha.findEmployees(12345667777));
var avanti = new Employee(30, 'Avanti', 600000);
console.log("-" + avanti.findEmployees('Goa'));
console.log("-" + avanti.findEmployees(123475432));
