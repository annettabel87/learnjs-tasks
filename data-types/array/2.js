const styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');
const middle = Math.ceil(styles.length / 2);
styles[middle] = 'Классика';
alert(styles.shift());
styles.unshift('Рэп', 'Регги ');