const vowels = /[aeiou]/gi;

const vowelDots = (str) => {
  let regX = str.match(vowels);
  let res = "";

  if (regX === null) {
    return str;
  }

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < regX.length; j++) {
      if (str[i - 1] === regX[j]) {
        res += ".";
      }
    }
    res += str[i];
  }
  return res;
};

console.log(vowelDots("rhythm"));
