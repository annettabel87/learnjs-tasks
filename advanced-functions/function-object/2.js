const sum = (arg1) => {
    let currentSum = arg1;
    
    function innerFunc(arg2) {
        currentSum += arg2;
        return innerFunc;
      }

    innerFunc.toString = function() {
        return currentSum;
      };

    return innerFunc;
}


