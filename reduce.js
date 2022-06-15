const fold = (arr, func, acc) =>
  arr.map((int) => (acc = func(acc, int)))[arr.length - 1];

const foldRight = (arr, func, acc) => {
  let newArr = arr.slice().reverse();
  return newArr.map((int) => (acc = func(acc, int)))[newArr.length - 1];
};

const reduce = (arr, func) => {
  if (arr.length < 1) {
    throw Error("Whoops!");
  } else {
    return fold(arr.slice(1), func, arr[0]);
  }
};

const reduceRight = (arr, func) => {
  let newArr = arr.slice().reverse();
  return reduce(newArr, func);
};
