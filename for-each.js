const forEach = (arr, func) => {
  let res = [];
  arr.map((element, index, array) => res.push(func(element, index, array)));
  return res;
};
