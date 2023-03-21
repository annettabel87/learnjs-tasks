class FormatError extends SyntaxError {
    constructor(message) {
        super(message);
        this.name = 'FormatError';
    }
}

let error = new FormatError('ошибка форматирования');

console.log( error.message ); 
console.log( error.name ); 
console.log( error.stack ); 