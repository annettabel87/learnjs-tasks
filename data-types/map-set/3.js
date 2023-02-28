let map = new Map();

map.set("name", "John");

let keys = map.keys();

// нужно сделать массив из итерируемого объекта
keys = Array.from(keys);
keys.push("more");