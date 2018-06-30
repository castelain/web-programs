//1.boolean value
let isDone: boolean = false;
//2.number value
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
//3.string value
let color: string = "blue";
color = 'red';
//4.template string
let fullName: string = 'Boob Bobbington';
let age: number = 37;
let sentence: string = 'Hello, my name is ${fullName}.\
I will be ${age + 1} years old next RTCDTMFToneChangeEvent.';
//5.arrays of value
let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];
//6.tuple（元组）(union types)
//declare a tuple type
let tuple1: [string,number];
//initialize it
tuple1 = ['hello',10];
console.log(tuple1[0].substr(1));
tuple1[3] = 'world';
console.log(tuple1[5].toString());
console.log('tuple1: ' + tuple1);
//7.enum(枚举类型)
enum Color {Red = 1,Green,Blue};
let c: Color = Color.Green;
let colorName: string = Color[2];
alert(colorName);
//8.any
let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false;
let list: any[] = [1,true,'free'];
list[1] = 100;
//9.void 
function warnUser():void{
    alert('This is my warning message!');
}
let unusable: void = null;
unusable = undefined;
//10&11.null and undefined
let u: undefined = undefined;
let n: null = null;
//12.never(a subtype of,and assignable to,every type)
// Function returning never must have unreachable end point
function error(message: string): never{
    throw new Error(message);
}
//Inferred(推测) return type is never
function fail(){
    return error('Something failed!');
}
//Function returning never must have unreachable end point
function infiniteLoop():never{
    while(true){

    }
}


//type assertion
//form-1('angle-bracket syntax')
let someValue1: any = 'this is a string';
let strLength1: number = (<string>someValue1).length;
//form-2('as' syntax)(JSX allowed)
let someValue2: any = 'this is another string';
let strLength2: number = (someValue2 as string).length;
