//泛型
function identity(arg: any): any{
    return arg;
}

//通用标识函数，T是类型变量
function indentity_1<T>(arg: T): T{
    return arg;
}
//两种调用方式
//1.将所有参数（包括类型参数）传递给函数
let output = indentity_1<string>('myString');
//2.使用类型参数推理
let output_1 = indentity_1('myString');

function loggingIdentity<T>(arg: T[]): T[]{
    console.log(arg.length);
    return arg;
}

//泛型函数
function indentity_2 <T>(arg: T): T{
    return arg;
}
let myIndentity: <U>(arg: U) => U = indentity_2;
let myIndentity_2: {<U>(arg:U): U} = indentity_2;

//泛型接口
interface GeneritityIdentityFn<T>{
    (arg: T) : T;
}
function indentity_3 <T>(arg: T): T{
    return arg;
}
let myIndentity_3: GeneritityIdentityFn <number> = identity;

//泛型类
class GenericNumber<T>{
    zeroValue: T;
    add: (x: T,y: T) => T;
}
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x,y){return x + y;};

//泛型约束
interface Lengthwise{
    length: number;
}
function loggingIdentity_1<T extends Lengthwise>(arg: T): T{
    console.log(arg.length);
    return arg;
}
loggingIdentity_1({length: 10,value: 3});
