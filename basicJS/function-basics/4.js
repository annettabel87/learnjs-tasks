function pow(x,n) {
    return x**n;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

n < 1 ? alert("Нельзя возвести в степень ${n}") : alert(pow(x, n));