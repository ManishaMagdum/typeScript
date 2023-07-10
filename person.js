var Person = /** @class */ (function () {
    function Person(fname, age) {
        this.fname = fname;
        this.age = age;
        this.fname = fname;
        this.age = age;
    }
    return Person;
}());
var jack = new Person('Jack', 50);
console.log(jack.fname, jack.age);
function Display(id, name, role) {
    if (role === void 0) { role = "Guest User"; }
    console.log('Id', id);
    console.log('Name', name);
    if (role != undefined) {
        console.log('Role', role);
    }
}
//Display(1, 'Jack', 'Admin');
Display(1, 'Jack');
