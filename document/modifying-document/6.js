const liElements = document.querySelectorAll('li');

for (const li of liElements) {
    const childCount = li.querySelectorAll('li').length;
    if(childCount == 0) continue;

    li.firstChild.data += `[${childCount}]`;
}