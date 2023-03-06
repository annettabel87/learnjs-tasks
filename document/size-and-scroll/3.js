// В чём отличие между getComputedStyle(elem).width и elem.clientWidth?

// getComputedStyle не всегда учитываает полосы прокрутки
// getComputedStyle может вернуть auto
// getComputedStyle возвращат размер с px, а clientWidth число
// clientWidth включает в размер padding, а getComputedStyle при обычном box-sizing не включает padding