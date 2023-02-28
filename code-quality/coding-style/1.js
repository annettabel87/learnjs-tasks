function pow(x,n) // нет пргобела между параметрами
{ // нужно перенести скобку настроку выше
  let result=1; // нет пробелов по краям знака =
  for(let i=0;i<n;i++) {result*=x;} // нет пробелов, можно убрать фигурные скобки, либоперенести на тело функции на следующую строку
  return result;
} // не хватаетпустых строк между блоками кода

let x=prompt("x?",''), n=prompt("n?",'') // переменные лучше объявлять отдельно в разных строках
if (n<=0) // не хватает пробелов
{ // нужно перенести на строку выше
  alert(`Степень ${n} не поддерживается, введите целую степень, большую 0`); // слишком длинная строка
}
else // перенести на строку выше
{
  alert(pow(x,n)) // не хватает пробелов
}

// исправленный вариант

/*function pow(x, n) {
    let result = 1;
  
    for (let i = 0; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  let x = prompt("x?", "");
  let n = prompt("n?", "");
  
  if (n <= 0) {
    alert(`Степень ${n} не поддерживается,
      введите целую степень, большую 0`);
  } else {
    alert( pow(x, n) );
  } */