/**
 * Created by ljj on 2016/12/26.
 */
'use strict';

// function asyncFun(a,b,cb) {
//     setTimeout(function () {
//         cb(a+b);
//     },200);
// }
//
// asyncFun(1,2,function (result) {
//     if(result > 2){
//         asyncFun(result,2,function (result) {
//             if(result > 4) {
//                 asyncFun(result,2,function (result) {
//                     console.log(result);
//                 });
//             }
//         });
//     }
// });


function asyncFun(a, b) {

    return new Promise(function (resolve, reject) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            reject(new Error('no number'));
        }
        setTimeout(function () {
            resolve(a + b);
        }, 200);
    });
}

asyncFun(1, 'a')
    .then(function (result) {
            if (result > 2) {
                return asyncFun(result, 2);
            }
        },
        function (err) {
            console.log('first--:' + err);
        })
    .then(function (result) {
        if (result > 4) {
            console.log('ok');
        }

    }).catch(function (error) {
    console.log(error);

});


console.log(2);