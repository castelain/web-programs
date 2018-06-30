//普通接口的使用
/* interface LabelledValue{
    label: string;
}
function printLabel(labelObj: LabelledValue){
    console.log(labelObj.label);
}
let myObj = {size: 10,label: 'Size 10 Object'};
printLabel(myObj); */

//接口中的可选属性?:
/* interface SquareConfig{
    color?: string;
    width?: number;
}
function createSquare(config: SquareConfig):{color: string,area: number}{
    let newSquare = {color: 'white',area: 100};
    if(config.color){
        newSquare.color = config.color;
    }
    if(config.width){
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let mySquare = createSquare({color: 'black'}); */

//只读属性
interface Point{
    readonly x: number;
    readonly y: number;
}
let p: Point = {x: 10,y: 10};
// p.x = 20; ->error(因为x为只读属性)

//只读的数组
let a: number[] = [1,2,3,4];
let ro: ReadonlyArray<number> = a;
// ro[1] = 2; ->error readonly
//ro.push(5); ->error
//ro.length = 100; ->error
//a = ro; ->error
a = ro as number[];//通过类型断言来覆盖数组的只读属性
//要记住是使用readonly还是const最简单的方法是询问您是使用变量还是属性。变量使用，const而属性使用readonly。

//SquareConfig can have any number of properties, and as long as they aren’t color or width, their types don’t matter.
interface SquareConfig{
    color?: string;
    width?: number;
    [propName: string]: any;
}

//用接口描述一个函数类型
interface SearchFunc{
    (source: string,substring: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function(source: string,substring: string): boolean{
    let result = source.search(substring);
    return result > -1;
}

//indexable type
interface StringArray{
    //支持数字的索引器
    [index: number]: string;
}
let myArray: StringArray;
myArray = ['bob','fred'];
let myStr: string = myArray[0];

//类类型(用接口来明确强制类满足特定的‘合约’)
interface ClockInterface{
    currentTime: Date;
    setTime(d: Date);
}
class Clock implements ClockInterface{
    currentTime: Date;
    setTime(d: Date){
        this.currentTime = d;
    }
    constructor(h: number,m: number){}
}
let clock = new Clock(15,50);

//扩展接口
interface Shape{
    color: string;
}
interface Square extends Shape{
    sideLigth: number;
}
let square = <Square>{};
square.color = 'blue';
square.sideLigth = 10;