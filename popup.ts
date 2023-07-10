console.log("Hello");

alert("Hello");

function newConfirm(test?: string) {

 

}

confirm("Do you really want to do this?");

var data = prompt("Please enter your name");

console.log('Entered name', data)

// unknown

 

let value : unknown;

 

// value = true; // OK 

 

// value = [];

// value = Math.random;

// value = null;

// value = undefined;

 

let value1 : unknown = value;

let value2 : any = value;

 

let value3 : boolean = value;

 

let value4 : number = value;

 

let value5 : string = value;

 

let value6 : object = value;

 

let value7 : any[] = value;
function loadString(): any {

    return 1234567;

}

 

function loadnumber(): any {

    return 123

}

let someVariable : unknown;

someVariable = loadString();

 

if (typeof someVariable == 'string') {

    console.log(someVariable.trim());

}

 

someVariable = loadnumber();

 

if (typeof someVariable == 'number') {

    console.log(someVariable.toFixed(2));

}