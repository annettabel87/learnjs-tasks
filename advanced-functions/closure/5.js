const inBetween = (a, b) => {
    return  (item) => {
        return (item >= a && item <= b) ? true : false;
    }
}

const inArray = (arr) => {
    return (item) => {
        return  arr.includes(item) ? true : false;
     }
}


