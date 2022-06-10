const pyramid = (str, num) => {
  let res = "";
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num - i; j++) {
      res += " ";
    }

    for (let k = 0; k < 2 * i; k++) {
      res += str;
    }
    res += str + "\n";
  }
  return res.trimEnd();
};

console.log(pyramid("Z", 6));
