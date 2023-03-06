// 1 cycle
const sumTo = (n) => {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;        
    }
    return sum;
}

// 2 sumTo

const sumToRec = (n) => {
    if (n === 1){
        return 1
    } else {
        return n + sumToRec(n-1)
    }
}

// 3 arithmetic progression

const sumToPr = (n) => (1 + n)/2*n;


// 3 вариант самый быстрый, т.к меньше шагов
// рекурсия самая медленная т.к. есть вложенные вызовы
// sumTo(100000) вычислится взависимости от движка. Google chrome и Node последних версийй вычислили