const readNumber = () => {
    let num;

    do {
        num = prompt("введите число", 0)
    } while (!isFinite(num));    

    return (num === null || num === '') ? null : +num;
}
