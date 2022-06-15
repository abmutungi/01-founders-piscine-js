const filter = (arr, func) => {
  let res = [];
  arr.forEach((element, index, array) => {
    if (func(element, index, array)) {
      res.push(element);
    }
  });
  return res;
};

const reject = (arr, func) => {
  let tru = [];
  let fals = [];
  arr.map((element, index, array) => {
    if (func(element, index, array)) {
      tru.push(element);
    } else {
      fals.push(element);
    }
  });
  return [fals];
};

const partition = (arr, func) =>
  [filter(arr, func)].concat([reject(arr, func)]);
