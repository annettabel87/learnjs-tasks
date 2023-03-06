function createCalendar(elem, year, month) {
    const table = document.createElement('table');
    const tHead = document.createElement('thead');
    const days = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']
    days.map(day => {
        const th = document.createElement('th');
        th.innerHTML = day;
        tHead.append(th);
    })
    table.append(tHead);

    const firstDay = new Date(year, month - 1);    

    for (let i = 0; i < getDay(firstDay); i++) {        
        table.append(document.createElement('td'));
    }

    while (firstDay.getMonth() == month - 1) {
        const td = document.createElement('td');
        td.innerHTML = firstDay.getDate();
        table.append(td);

        if (getDay(firstDay) % 7 == 6) { 
          table.append(document.createElement('tr'));
        }

        firstDay.setDate(firstDay.getDate() + 1);
      }

      if (getDay(firstDay) != 0) {
        for (let i = getDay(firstDay); i < 7; i++) {
          table.append(document.createElement('td'));
        }
      }
    elem.append(table);
  }

  function getDay(date) { 
    let day = date.getDay();
    if (day == 0) day = 7; 
    return day - 1;
  }

  createCalendar(calendar, 2023, 3);