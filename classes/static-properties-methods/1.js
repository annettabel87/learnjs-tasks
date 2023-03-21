// class Rabbit extends Object {
//     constructor(name) {
//       super(); 
//       this.name = name;
//     }
//   }

// Не хватает super в конструкторе 
class Rabbit extends Object {
    constructor(name) {
      super(); 
      this.name = name;
    }
  }

  let rabbit = new Rabbit("Кроль");
  
  //alert( rabbit.hasOwnProperty('name') ); // Ошибка 


// hasOwnProperty статический метод и нужно вызывать его у Rabbit
console.log( Rabbit.hasOwnProperty('name') );