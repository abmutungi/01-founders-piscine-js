// const split = (str, sep) => {
//   let arr = [];
//   let st = "";
//   let newStr = str.replaceAll(sep, "*");

//   if (sep === "") {
//     for (let i = 0; i < str.length; i++) {
//       arr.push(str[i]);
//     }
//     return arr;
//   }

//   for (let i = 0; i < newStr.length; i++) {
//     if (newStr[i] !== "*") {
//       st += newStr[i];
//     } else if (newStr[i] === "*") {
//       arr.push(st);
//       st = "";
//     }
//   }
//   arr.push(st);
//   return arr;
// };
const split = (str,sep) => {
    if (sep == "") {
        return Array.from(str)
    }

    let result = []
    let start = 0,end = 0
    
    while (str.search(sep) !== -1) {
        end = str.search(sep)
        str = str.replace(sep,"^")
        result.push(str.slice(start,end))
        start = end+1
    }

    result.push(str.slice(start))
    return result
}

// console.log(split("a b c", " "));
// console.log(split("ggg - ddd - b", " - "));
// console.log(split("ee,ff,g,", ","));
// console.log(split("Riad", " "));
// console.log(split("rrrr", "rr"));
// console.log(split("rrirr", "rr"));
// console.log(split("Riad", ""));
// console.log(split("", "Riad"));

const join = (arr, sep) => {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    if (sep.length == 0) {
      str += arr[i];
    } else {
      str += arr[i] + sep;
    }
  }

  str = str.slice(0, str.length - sep.length);
  return str;
};
//console.log(join(["ee", "ff", "g", ""], ","));
