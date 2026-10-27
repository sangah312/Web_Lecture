// let funcNoname = function () {
//     alert('func_01');
//     alert('func_02');
// }

// // funcNoname();

// alert(typeof(funcNoname) + " : " + funcNoname);

// function funcName() {
//     alert("func_01");
//     alert("func_02");
// }

// alert(typeof(funcName) + " : " + funcName);

// function f(x) {
//     return x * x;
// };

// alert(f(3));

// let fun = function() {
//     alert('함수 호출');
// }

// function fun() {
//     alert('함수 호출');
// }

// function callTenTimes(callback_func) {
//     for (let i = 0; i < 2; i++) {
//         callback_func();
//     }
// }

// callTenTimes(fun);


let person = {
    name: '박상아',
    eat: function(food) {
        alert(food + '를 먹습니다.')
    }
}

person.eat('밥');