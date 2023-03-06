let hamster = {
    stomach: [],
  
    eat(food) {
      this.stomach.push(food);
    }
  };
  
  let speedy = {
    __proto__: hamster
  };
  
  let lazy = {
    __proto__: hamster
  };
  
 
  speedy.eat("apple");
  alert( speedy.stomach ); // apple  
  
  alert( lazy.stomach ); // apple

  // у объектов нет своего войства stomach и они ищут его по цепочке прототипов
  // и находят выше. В результате у них общий stomach на всех.
  // нужно добавить каждому хомяку свойство stomach


  let speedy1 = {
    __proto__: hamster,
    stomach: []
  };
  
  let lazy1 = {
    __proto__: hamster,
    stomach: []
  };