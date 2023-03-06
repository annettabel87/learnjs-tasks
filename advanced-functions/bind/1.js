function f() {
    alert( this ); // ?  null, контекст указан как null
  }
  
  let user = {
    g: f.bind(null)
  };
  
  user.g();