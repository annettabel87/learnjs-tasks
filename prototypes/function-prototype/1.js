function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

alert( rabbit.eats ); // true

// 1 Rabbit.prototype = {}; true т.к. объект уже создан

// 2 Rabbit.prototype.eats = false;  false Объекты присваиваются по ссылке, 
// поэтому значение поменяется

// 3 delete rabbit.eats;  true свойство удаляют в объекте, ноон найдет его в прототипе

// 4 delete Rabbit.prototype.eats;  undefined свойства не найдётся