"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
console.log(Gender.Male);
console.log(Gender.Female);
console.log(Gender[0]);
console.log(Gender[1]);
var Weekends;
(function (Weekends) {
    Weekends[Weekends["Saturday"] = 6] = "Saturday";
    Weekends[Weekends["Sunday"] = 7] = "Sunday";
})(Weekends || (Weekends = {}));
console.log(Weekends.Saturday);
console.log(Weekends.Sunday);
console.log(Weekends[6]);
console.log(Weekends[7]);
var assignment_1 = require("./assignment");
console.log(assignment_1.Employee);
