function A() {  }
function B() {  }

let a = new A();
let b = new B();

alert( a == b ); // true
// возможно, если они вернут один и тот же объект  после return

const object = {};

function C() {
    return object;
}

function D() {
    return object;
}

let c = new C();
let d = new D();

console.log(c ==  d)