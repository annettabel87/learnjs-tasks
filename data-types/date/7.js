function getSecondsToTomorrow() {
    const nowDate = new Date();
    const futureDate = new Date();
    futureDate.setDate(nowDate.getDate() + 1);
    futureDate.setHours(0, 0, 0, 0);
    
    return (futureDate - nowDate)/1000;
}
