const ionOut = (str) => str.match(/[a-z]+t(?=ion)/gi) || [];
console.log(ionOut("attention"));
