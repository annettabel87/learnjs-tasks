// У нас есть пустой DOM-элемент elem и строка text.

// Какие из этих 3-х команд работают одинаково?

// elem.append(document.createTextNode(text))
// elem.innerHTML = text
// elem.textContent = text

// в 1 и 3. Будет вставлено как текст. Во 2 варианте если будут теги в строке, вставится как HTML