const  allLiElements = document.querySelectorAll('li');

for (const liElement of allLiElements) {    
    const text = liElement.firstChild.data;
    
    const innerLiElement = liElement.querySelectorAll('li').length
    console.log(`${text}: ${innerLiElement}`);
}