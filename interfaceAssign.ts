

abstract class Car {
    Wheel():String{
        return '4 wheeler';
    }
    CheckAC():string {
        return 'AC is available';
    }
    CallFacility():string{
        return 'Call faility supported';
    }

abstract Price():Number;
abstract getTotalSeats():Number;
abstract Color ():string;

}
interface IGPS{
    GPS ():string ;

}

class Toyota extends Car {
    Price(): Number {
        return 1000000;
    
    }
    getTotalSeats(): Number {
        return 5;

    }
    Color(): string {
        return 'White';
    }
}      
 
let toyo = new Toyota();
console.log(`Toyota car details:`);
console.log(`Price:${toyo.Price()}`);
console.log(`Total Seats:${toyo.getTotalSeats()}`);
console.log(`Color: ${toyo.Color()}`);
console.log(`Wheel:${toyo.Wheel()}`)
console.log(`AC:${toyo.CheckAC()}`);
console.log(`Call Facility:${toyo.CallFacility()}`);
console.log(`-------------------------------`);

class Hundyai extends Car implements IGPS{
    Price(): Number {
        return 900000;
       

    }
    getTotalSeats(): Number {
        return 7;
    }
    Color(): string {
        return 'gray';
        
    }
    GPS(): string {
        return 'GPS Supported'
    }
}
const hun = new Hundyai();
console.log(`Hundyai Car details:`)
 console.log(`Price:${hun.Price()}`);
console.log(`Total Seats:${hun.getTotalSeats()}`);
console.log(`Color: ${hun.Color()}`);
console.log(`Wheel:${hun.Wheel()}`)
console.log(`AC:${hun.CheckAC()}`);
console.log(`Call Facility:${hun.CallFacility()}`);
console.log(`GPS support: ${hun.GPS()}`);


    










