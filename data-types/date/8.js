function formatDate(date) {
    let difference = new Date() - date; 

    if (difference < 1000) { 
        return 'прямо сейчас';
  }

    let sec = Math.floor(difference / 1000); 

    if (sec < 60) {
        return `${sec} сек. назад`;
    }

    let minute = Math.floor(difference / 60000); 
        if (minute < 60) {
        return `${minute} мин. назад`;
    }

  const day = ('0' + date.getDate()).slice(-2);
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const year = ('' + date.getFullYear()).slice(-2);
  const hours = ('0' + date.getHours()).slice(-2);
  const minutes = ('0' + date.getMinutes()).slice(-2);

  return `${day}.${month}.${year} ${hours}:${minutes}`
}
