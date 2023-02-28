function getWeekDay(date) {
    const days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
    const day = date.getDay();
    return days[day];
}
