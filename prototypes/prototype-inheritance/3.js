let animal = {
    eat() {
      this.full = true;
    }
  };
  
  let rabbit = {
    __proto__: animal
  };
  
  rabbit.eat();

  // свойство full при вызове rabbit.eat() будет у rabbit
  // т.к. this этого вызова rabbit