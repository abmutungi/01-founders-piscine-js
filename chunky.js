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
  return res;
};

console.log(slice(["a", "b", "c"], 0, 2));

const chunk = (arr, num) => {
  let res = [];
  let fc = slice(arr, 0, num);
  let nc = slice(arr, num, arr.length);

  res.push(fc);
  res.push(nc);

  return res;
};

console.log(chunk(["a", "b", "c", "d"], 2));
console.log(chunk(["a", "b", "c", "d"], 3));
