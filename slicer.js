const slice = (str, index, last) => {
  let res = [];

  if (last === undefined) {
    last = str.length;
  } else if (last < 0) {
    last = str.length + last;
  }

  if (index < 0) {
    index = str.length + index;
  }

  for (let i = index; i < last; i++) {
    res.push(str[i]);
  }
  //ternary syntax - condition ? exprIfTrue : exprIfFalse
  return typeof str === "string" ? res.join("") : res;
};
console.log(slice("arnold"));
