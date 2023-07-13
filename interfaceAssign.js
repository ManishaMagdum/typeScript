var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.Wheel = function () {
        return '4 wheeler';
    };
    Car.prototype.CheckAC = function () {
        return 'AC is available';
    };
    Car.prototype.CallFacility = function () {
        return 'Call faility supported';
    };
    return Car;
}());
var Toyota = /** @class */ (function (_super) {
    __extends(Toyota, _super);
    function Toyota() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Toyota.prototype.Price = function () {
        return 1000000;
    };
    Toyota.prototype.getTotalSeats = function () {
        return 5;
    };
    Toyota.prototype.Color = function () {
        return 'White';
    };
    return Toyota;
}(Car));
var toyo = new Toyota();
console.log("Toyota car details:");
console.log("Price:".concat(toyo.Price()));
console.log("Total Seats:".concat(toyo.getTotalSeats()));
console.log("Color: ".concat(toyo.Color()));
console.log("Wheel:".concat(toyo.Wheel()));
console.log("AC:".concat(toyo.CheckAC()));
console.log("Call Facility:".concat(toyo.CallFacility()));
console.log("-------------------------------");
var Hundyai = /** @class */ (function (_super) {
    __extends(Hundyai, _super);
    function Hundyai() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hundyai.prototype.Price = function () {
        return 900000;
    };
    Hundyai.prototype.getTotalSeats = function () {
        return 7;
    };
    Hundyai.prototype.Color = function () {
        return 'gray';
    };
    Hundyai.prototype.GPS = function () {
        return 'GPS Supported';
    };
    return Hundyai;
}(Car));
var hun = new Hundyai();
console.log("Hundyai Car details:");
console.log("Price:".concat(hun.Price()));
console.log("Total Seats:".concat(hun.getTotalSeats()));
console.log("Color: ".concat(hun.Color()));
console.log("Wheel:".concat(hun.Wheel()));
console.log("AC:".concat(hun.CheckAC()));
console.log("Call Facility:".concat(hun.CallFacility()));
console.log("GPS support: ".concat(hun.GPS()));
