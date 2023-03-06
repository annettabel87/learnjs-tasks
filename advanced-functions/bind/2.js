function f() {
    alert(this.name);
  }
  
  f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } );
  
  f();

  // bind работает 1 раз, потом нельзя изменить контекст