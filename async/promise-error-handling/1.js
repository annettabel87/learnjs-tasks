new Promise(function(resolve, reject) {
    setTimeout(() => {
      throw new Error("Whoops!");
    }, 1000);
  }).catch(alert);

  //ошибка генерируется асинхроно, 
  //. Поэтому промис не может обработать её.