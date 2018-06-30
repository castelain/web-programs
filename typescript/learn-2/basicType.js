//1.boolean value
var isDone = false;
//2.number value
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
//3.string value
var color = "blue";
color = 'red';
//4.template string
var fullName = 'Boob Bobbington';
var age = 37;
var sentence = 'Hello, my name is ${fullName}.\
I will be ${age + 1} years old next RTCDTMFToneChangeEvent.';
//5.arrays of value
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
//6.tuple（元组）(union types)
//declare a tuple type
var tuple1;
//initialize it
tuple1 = ['hello', 10];
console.log(tuple1[0].substr(1));
tuple1[3] = 'world';
console.log(tuple1[5].toString());
console.log('tuple1: ' + tuple1);
//7.enum(枚举类型)
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
var colorName = Color[2];
alert(colorName);
//8.any
var notSure = 4;
notSure = 'maybe a string instead';
notSure = false;
var list = [1, true, 'free'];
list[1] = 100;
//9.void 
function warnUser() {
    alert('This is my warning message!');
}
var unusable = null;
unusable = undefined;
//10&11.null and undefined
var u = undefined;
var n = null;
//12.never(a subtype of,and assignable to,every type)
// Function returning never must have unreachable end point
function error(message) {
    throw new Error(message);
}
//Inferred(推测) return type is never
function fail() {
    return error('Something failed!');
}
//Function returning never must have unreachable end point
function infiniteLoop() {
    while (true) {
    }
}
//type assertion
//form-1('angle-bracket syntax')
var someValue1 = 'this is a string';
var strLength1 = someValue1.length;
//form-2('as' syntax)(JSX allowed)
var someValue2 = 'this is another string';
var strLength2 = someValue2.length;
