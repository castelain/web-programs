 //枚举
 //1.数字枚举（具有自动给递增行为）
 enum Direction {
     Up = 1,
     Down,//=2
     Left,//=3
     Right,//=4
 }
 enum Direction_1 {
     Up,//=0
     Down,//=1
     Left,//=2
     Right,//=3
 }
//使用枚举
let dir1 = Direction.Right;
console.log(dir1);

//2.字符串枚举
enum Direction_2 {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT',
}

//3.异构枚举（字符串和数字成员混合使用）
enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = 'YES',
}

//计算得到的枚举成员
enum FileAccess {
    //常量成员
    None,
    Read = 1 << 1,
    Write = 1 << 2,
    ReadWrite = Read | Write,
    //计算成员
    G = '123'.length,
}

enum ShapeKind {
    Circle,
    Square,
}
interface Circle {
    kind: ShapeKind.Circle;
    radius: number;
}
interface Square {
    kind: ShapeKind.Square;
    sideLength: number;
}
let c: Circle = {
    kind: ShapeKind.Circle,
    radius: 100,
}

//反向映射（从枚举值到枚举名称的反向映射）
enum Enum {
    A,
}
let a = Enum.A;
let nameOfA = Enum[a];//'A'

//const 枚举(只能使用常量枚举表达式)
const enum Enum_1 {
    A = 1,
    B = A * 2,
}
const enum Directions_2 {
    Up,
    Down,
    Left,
    Right,
}
let directions = [Directions_2.Up, Directions_2.Down, Directions_2.Left,Directions_2.Right];//[0,1,2,3]
