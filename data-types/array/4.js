function sumInput() {
    const arr =  [];

    while (true) {

        let num = prompt("Введите число", 0);    
        
        if (num === "" || num === null || !isFinite(num)) break;
    
        numbers.push(+num);
      }
    
      let sum = 0;
      for (let number of arr) {
        sum += number;
      }
      return sum;
}