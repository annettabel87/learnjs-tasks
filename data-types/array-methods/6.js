function Calculator() {
    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
      };
    
      this.calculate = function(str) {
    
        const split = str.split(' ');
        const a = +split[0];
        const operator = split[1];
        const b = +split[2];
    
        if (!this.methods[operator] || isNaN(a) || isNaN(b)) {
          return NaN;
        }
    
        return this.methods[operator](a, b);
      }
    
      this.addMethod = function(name, func) {
        this.methods[name] = func;
      };
}