/**
 * Created by ljj on 2016/12/25.
 * 进行js基础语法的练习
 */
"use strict";
// var a = {
//     a:1
// };
// var fun = function(){};
// fun.__proto__ = a;
//
// console.log(fun.__proto__);
// console.log(a.__proto__);

function f() {
    try {
        console.log(0);
        throw "bogus";
    } catch (e){
        console.log(1);
        return true;
        console.log(2);
    } finally {
        console.log(3);
        return false;
        console.log(4);
    }

    console.log(5);


}

var b = f();
console.log(b);