//枚举
//1.数字枚举
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
var Direction_1;
(function (Direction_1) {
    Direction_1[Direction_1["Up"] = 0] = "Up";
    Direction_1[Direction_1["Down"] = 1] = "Down";
    Direction_1[Direction_1["Left"] = 2] = "Left";
    Direction_1[Direction_1["Right"] = 3] = "Right";
})(Direction_1 || (Direction_1 = {}));
//使用枚举
var dir1 = Direction.Right;
console.log(dir1);
