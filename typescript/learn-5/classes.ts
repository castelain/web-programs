//普通的类的使用
/* class Greeter{
    msg: string;
    constructor(data: string){
        this.msg = data;
    }
    greet(){
        console.log('Hello, ' + this.msg);
    }
}
let greeter = new Greeter('jasmine');
greeter.greet(); */

//类的继承
/* class Animal{
    move(distanceInMeters: number = 0){
        console.log('Animal moved ' + distanceInMeters +' m.');
    }
}
class Dog extends Animal{
    bark(){
        console.log('Woof! Woof!');
    }
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();  */

/* class Animal{
    public name: string;
    public constructor(thename: string){
        this.name = thename;
    }
    public move(distanceInMeters: number = 0){
        console.log(this.name + ' moved ' + distanceInMeters + ' m.');
    }
}
class Snake extends Animal{
    public constructor(name: string){
        super(name);
    }
    public move(distanceInMeters = 5){
        console.log('Slithering...');
        super.move(distanceInMeters);
    }
}
class Horse extends Animal{
    public constructor(name: string){
        super(name);
    }
    public move(distanceInMeters = 24){
        console.log('Galloping...');
        super.move(distanceInMeters);
    }
}
let sam = new Snake('python');
let tom: Animal = new Horse('Tommy');

sam.move();
tom.move(34); */

let passcode = 'secret passcode';
class Employ {
    private _fullName: string;

    get fullName(): string{
        return this._fullName;
    }
    set fullName(newName: string){
        if(passcode && passcode == 'secret passcode'){
            this._fullName = newName;
        }else{
            console.log('Error: Unauthorized update of employee');
        }
    }
}
let employ = new Employ();
employ.fullName = 'jasmsime';
if(employ.fullName){
    console.log(employ.fullName);
}