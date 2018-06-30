/* function f(){
    var a = 10;
    return function g(){
        var b = a + 1;
        return b;
    }
}

var g = f();
g(); */

/* function f(shouldInitialize: boolean) {
    if (shouldInitialize) {
        var x = 10;
    }

    return x;
}

f(true);  // returns '10'
f(false); // returns 'undefined' */

for (var i = 0; i < 10; i++) {
    setTimeout(function() { console.log(i); }, 100 * i);
}

for (var i = 0; i < 10; i++) {
    // capture the current state of 'i'
    // by invoking a function with its current value
    (function(i) {
        setTimeout(function() { console.log(i); }, 100 * i);
    })(i);
}

//数组重构
let input = [1,2];
let [first,second] = input;
//交换数组元素的值
[first,second] = [second,first];
//用...语法来创建剩下的列表元素
let [a,...rest] = [1,2,3,4];//rest = [2,3,4]

//对象重构
let o = {
    a: 'foo',
    b: 12,
    c: 'bar'
};//({a,b} = {a: 'baz',b: 101});
