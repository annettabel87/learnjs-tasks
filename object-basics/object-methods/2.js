const calculator = {    
    read () {
        this.firstNum = +prompt("Введите первое число", 0);
        this.secondNum = +prompt("Введите второе число", 0)
    },
    sum() {
        return this.firstNum + this.secondNum;
    },
    mul() {
        return this.firstNum * this.secondNum;
    }
}

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );