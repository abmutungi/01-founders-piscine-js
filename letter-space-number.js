const letterSpaceNumber = (str) => {
  let lsm = /[a-zA-z]\s\d(?!\w)/g;
  let res = str.match(lsm);

  if (res === null) {
    return [];
  }

  return res;
};

console.log(letterSpaceNumber("I like 7up."));
console.log(letterSpaceNumber("It's 20 past 3."));
console.log(letterSpaceNumber("example 1, example 2"));
console.log(letterSpaceNumber(""));
console.log(letterSpaceNumber("Definitely 9."));
