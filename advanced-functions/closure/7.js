function makeArmy() {
    let shooters = [];
  
    let i = 0;
    while (i < 10) {
      let shooter = function() { // функция shooter
        alert( i ); // должна выводить порядковый номер
      };
      shooters.push(shooter);
      i++;
    }
  
    return shooters;
  }
  
  
  
 // в таком варианте у функции нет локальной переменной i, она ищет его во внешнем окружении,
 // но к моменту вызова цикл уже прошел и i=10. Нужно замкнуть i внутри функции

 function makeArmy1() {
    let shooters = [];
  
    let i = 0;
    while (i < 10) {
      let j = i;
      let shooter = function() { 
        alert(j); 
      };
      shooters.push(shooter);
      i++;
    }
  
    return shooters;
  }
 

 