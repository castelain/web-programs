//named function
/* function add(x: number,y: number): number{
    return x + y;
}
//Anonymous function
//let myAdd = function(x: number,y: number): number{ return x + y;}

let z: number = 100;
//0.必需的参数
function addToZ(x: number,y: number): number{
    return x + y + z;
}

//函数类型 = 参数类型 + 返回类型
let myAdd: (x: number,y: number) => number =
    function(x: number,y: number): number{
        return x + y;
    };

//1.可选的参数一定要放在必需的参数的后面
function buildName(firstName: string,lastName?: string){
    if(lastName){
        return firstName + lastName;
    }else{
        return firstName;
    }
}
let result1 = buildName('Bob');
let result2 = buildName('Bob','Adams');

//2.默认参数(这的参数second为默认参数)和可选参数不同，不一定要跟在必需的参数之后
function a(first: string,second = 'abc'): void{}
//调用这样的函数时，传递给它的参数个数要和函数定义的参数个数一致
function buildName1(firstName = 'Will',lastName: string): string{
    return firstName + ' ' + lastName;
}
let r1 = buildName1('Bob','Adams');
//显示的说明必须参数的值
let r2 = buildName1(undefined,'Adams');

//3.剩余的参数（一个或多个参数）(...表示)
function buildName2(firstName: string,...restOfName: string[]): string{
    return firstName + ' ' + restOfName.join(' ');
}
let employName = buildName2('Joseph','Samuel','Lucas','Jasmine');

let buildNameFun: (fname: string,...rest: string[]) => string = buildName2;
 */
//this关键字和箭头函数
/* let deck = {
    suits: ['hearts','spades','clubs','diamonds'],
    cards: Array(52),
    createCardPicker: function(){
        return function(){
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
            return {suit: this.suits[pickedSuit],card: pickedCard % 13};
        }
    }
};
let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();
alert('card: ' + pickedCard.card + ' of ' + pickedCard.suit);
 */
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard % 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard };
        };
    }
};
var cardPicker = deck.createPicker();
var pickedCard = cardPicker();
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
