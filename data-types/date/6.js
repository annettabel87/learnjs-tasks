function getSecondsToday()  {
    const nowDate = new Date();
    const startDay = new Date();
    startDay.setHours(0, 0, 0);   
     
    return (nowDate - startDay)/1000;
}

