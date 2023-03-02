function makeCounter() {
    let count = 0;
  
    return function() {
      return count++;
    };
  }
  
  let counter = makeCounter();
  let counter2 = makeCounter();
  
  alert( counter() ); // 0
  alert( counter() ); // 1
  
  alert( counter2() ); // ? покажет 0
  alert( counter2() ); // ?  покажет 1

  // у каждого вызова makeCounter свое лексическое окружение