function getLocalDay(date) {

    const day = date.getDay();
  
    if (day == 0) { 
      day = 7;
    }
  
    return day;
  }