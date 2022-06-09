const split = (str, sep) => {
  let arr = [];
  let st = "";
  let newStr = str.replaceAll(sep, "*");

  if (sep === "") {
    for (let i = 0; i < str.length; i++) {
      arr.push(str[i]);
    }
    return arr;
  }

  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] !== "*") {
      st += newStr[i];
    } else if (newStr[i] === "*") {
      arr.push(st);
      st = "";
    }
  }
  arr.push(st);
  return arr;
};

console.log(split("a b c", " "));
console.log(split("ggg - ddd - b", " - "));
console.log(split("ee,ff,g,", ","));
console.log(split("Riad", " "));
console.log(split("rrrr", "rr"));
console.log(split("rrirr", "rr"));
console.log(split("Riad", ""));
console.log(split("", "Riad"));

const  join = (arr, sep) => {
    let res = ''
    for (let i = 0; i < arr.length; i++) {
        // console.log(sep.length)
        if (sep.length == 0) {
            res += arr[i]
        } else {
            res += arr[i] + sep
        }
    }

    res = res.slice(0, res.length - sep.length)
    return res
}
console.log(join[("ee", "ff", "g", "")], ",");
