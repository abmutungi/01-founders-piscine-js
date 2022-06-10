const src = { nested: { key: "peekaboo" } };
const path = "nested.key";

const get = (src, path) => {
  let pArr = path.split(".");
  let res = src;

  pArr.forEach((element) => {
    if (res === undefined) {
      return res;
    }
    res = res[element];
  });
  return res;
};

// console.log(path.split("."));
// console.log(src);
console.log(get(src, path));
