const triangle = (str, num) => {
  let res = "";
  for (let i = 0; i <= num; i++) {
    for (let j = 0; j < i; j++) {
      res += str;
    }
    res += str + "\n";
  }
  return String(res.trim());
};
console.log(triangle("{}", 29));
// console.log(line);
