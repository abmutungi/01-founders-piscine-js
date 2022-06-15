const adder = (arr, start = 0) => arr.reduce((acc, (val) => acc + val + start));
const sumOrMul = (arr, elem = 0) => arr.reduce((acc, val) => (val % 2 == 0 ? acc * val : acc + val), elem);
const funcExec = (func, elem = 0) => func.reduce((acc, val) => val(acc), elem);
