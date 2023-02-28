function aclean(arr) {
    let map = new Map();

    for (let word of arr) {
        const sortedWords = word.toLowerCase().split("").sort().join("");;
        map.set(sortedWords, word);
    }
    return Array.from(map.values());
}
