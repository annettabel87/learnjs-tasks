function makeUser() {
    return {
      name: "John",
      ref: this
    };
  }
  
  let user = makeUser();
  
  alert( user.ref.name ); // выведется ошибка, т.к. вызывается не как метод объекта,
  // а знчит this = undefined и у него нет свойства name