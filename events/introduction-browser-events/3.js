button.addEventListener("click", () => alert("1"));

button.removeEventListener("click", () => alert("1"));

button.onclick = () => alert(2);

// выведется 1 и 2. removeEventListener не удалит обработчик т.к это разные функции
// addEventListener и onclick работают независимо друг от друга