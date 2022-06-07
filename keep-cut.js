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

function cutFirst(str) {
  return slice(str, 2);
}

function cutLast(str) {
  return slice(str, 0, -2);
}

function cutFirstLast(str) {
  return cutFirst(cutLast(str));
}

function keepFirst(str) {
  return slice(str, 0, 2);
}
function keepLast(str) {
  return slice(str, -2);
}

function keepFirstLast(str) {
  return keepFirst(str) + keepLast(str);
}

console.log(keepFirstLast("arnold"));
