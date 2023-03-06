let data = {
    "Рыбы": {
      "форель": {},
      "лосось": {}
    },
  
    "Деревья": {
      "Огромные": {
        "секвойя": {},
        "дуб": {}
      },
      "Цветковые": {
        "яблоня": {},
        "магнолия": {}
      }
    }
  };
  let container = document.getElementById('container');
  const createTree = (parent, childData) => {
    
    if (Object.keys(data).length === 0) return;
    let ulElement = document.createElement('ul');

    for (const data in childData) {       
            const liElement = document.createElement('li');
            liElement.innerHTML = data;
            parent.append(ulElement);
            ulElement.append(liElement)

            if(Object.keys(data).length !== 0) {
                createTree(liElement, childData[data]);
            }            
    }    
  }

  createTree(container, data);