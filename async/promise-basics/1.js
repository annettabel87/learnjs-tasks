let promise = new Promise(function(resolve, reject) {
    resolve(1);
  
    setTimeout(() => resolve(2), 1000);
  });
  
  promise.then(alert);

  //код выведет только 1, т.к. resolve или reject может быть только один раз