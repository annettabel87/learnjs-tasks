function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

alert( a instanceof B ); // true

//именно prototype в действительности определяет тип, а не функция-конструктор.