console.log("Hello");
alert("Hello");
function newConfirm(test) {
}
confirm("Do you really want to do this?");
var data = prompt("Please enter your name");
console.log('Entered name', data);
// unknown
var value;
// value = true; // OK 
// value = [];
// value = Math.random;
// value = null;
// value = undefined;
var value1 = value;
var value2 = value;
var value3 = value;
var value4 = value;
var value5 = value;
var value6 = value;
var value7 = value;
function loadString() {
    return 1234567;
}
function loadnumber() {
    return 123;
}
var someVariable;
someVariable = loadString();
if (typeof someVariable == 'string') {
    console.log(someVariable.trim());
}
someVariable = loadnumber();
if (typeof someVariable == 'number') {
    console.log(someVariable.toFixed(2));
}
