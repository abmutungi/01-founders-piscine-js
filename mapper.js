function flatten(arr, d = 1) {
  return d > 0
    ? arr.reduce(
        (acc, val) => acc.concat(Array.isArray(val) ? flat(val, d - 1) : val),
        []
      )
    : arr.slice();
}

const map = (arr, func) => {
  let res = [];
  arr.forEach((element, index, array) => res.push(func(element, index, array)));
  return res;
};

const flatMap = (arr, func) => {
  let res = [];
  arr.forEach((element, index, array) => res.push(func(element, index, array)));
  return flatten(res);
};
