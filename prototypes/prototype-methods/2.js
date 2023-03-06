function Rabbit(name) {
    this.name = name;
  }

  Rabbit.prototype.sayHi = function() {
    alert(this.name);
  };
  
  let rabbit = new Rabbit("Rabbit");

rabbit.sayHi(); // Rabbit,  вызывается у созданного объекта
Rabbit.prototype.sayHi(); // undefined, вызывается у Rabbit.prototype
Object.getPrototypeOf(rabbit).sayHi(); // undefined, вызывается у Rabbit.prototype
rabbit.__proto__.sayHi(); // undefined, вызывается у Rabbit.prototype