if (-1 || 0) alert( 'first' ); //  выведется, -1 это true
if (-1 && 0) alert( 'second' ); // не выведется, 0 это false
if (null || -1 && 1) alert( 'third' ); // выведется, 1 это true