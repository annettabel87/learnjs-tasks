function getAverageAge(users) {
    const sum = users.reduce((acc, item) => acc + item.age, 0);
    return sum / users.length;
}
