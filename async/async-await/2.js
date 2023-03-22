class HttpError extends Error {
    constructor(response) {
      super(`${response.status} for ${response.url}`);
      this.name = 'HttpError';
      this.response = response;
    }
  }
  
  async function loadJson(url) {
    try {
        const response = fetch(url);
        if (response.status == 200) {
            let json = await response.json(); 
            return json;
        }

        throw new HttpError(response);

    } catch (error) {
        console.log(error.message);
    }
    
  }
  
  // Запрашивать логин, пока github не вернёт существующего пользователя.
  async function demoGithubUser() {
    let user;

    while(true) {
      let name = prompt("Введите логин?", "iliakan");
  
      try {
        user = await loadJson(`https://api.github.com/users/${name}`);
        break;
      } catch(error) {
        if (err instanceof HttpError && err.response.status == 404) {          
          alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
        } else {          
          throw error;
        }
      }
    }
    
    alert(`Полное имя: ${user.name}.`);
    return user;
  }
  
demoGithubUser();