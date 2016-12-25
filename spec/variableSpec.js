/**
 * Created by ljj on 2016/12/25.
 * 验证js变量声明和使用的语言特性
 */
'use strict'
describe('Variable: ', function () {
    describe("A variable declared with no initial value specified has the value 'undefined'", function () {
        it('used not be assigned a value ,should be undefined', function () {
            var a;
            expect(a).toBeUndefined();
        });
        it("decalared by var with no initial value specified has the value  'undefined'", function () {

            expect(a).toBeUndefined();
            var a;
        });
        it('used before declaration ,program should throw a Error ', function () {
            expect(function () {
                return b;
            }).toThrowError('b is not defined');
        });
        it("decalared by let with no initial value specified has the value  'undefined'", function () {

            let x;
            expect(x).toBeUndefined();
        });
        it("decalared by let with no initial value specified and after using it ,program should throw a Error: 'not defined'", function () {
            expect(function () {
                return x;
            }).toThrowError('x is not defined');
            let x;
        });
    });
    describe("A variable can be declared in block statement scope with ES6 ",function () {
        it(' a variable declared by var  is local to the function or global context,not block',function () {
            if(true) {
                var x= 5;
            }
            expect(x).toBe(5);
        });
        it(' a variable declared by let  is local to the block statement scope,not block',function () {
            if(true) {
                let x= 5;
            }
            expect(function () {
                return x;
            }).toThrowError('x is not defined');
        });

    });

    describe("hoisting:means you can refer to a variable declared later",function () {
        it('hoisting 1',function () {
            expect(x).toBeUndefined();
            var x = 3;

        });
        var y  = "outer value";
        it('hoisting 2',function () {
            expect(y).toBeUndefined();
            var y = "local value";

        });
        it('hoisting 3',function () {
            expect(y).toBe("outer value");
        });
        it('let and const not hoist',function () {
            expect(function () {
                return z;
            }).toThrowError('z is not defined');

            let z = 3;
        });

    });

    describe("function hoisting",function () {
        it(' can make you call a function before declared',function () {
            expect(foo()).toBe("bar");
            function foo() {
                return "bar";
            }

        });
        it(' can not allow you refer a function before function expression decared',function () {
            expect(function () {
                return baz();
            }).toThrowError(TypeError,'baz is not a function');
            var baz = function foo() {
                return "bar";
            }

        });


    });

});